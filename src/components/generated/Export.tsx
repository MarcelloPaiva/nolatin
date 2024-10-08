import React, { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"
import IconButton from "../IconButton"
import { Send, X } from "react-feather"
import Button from "../Button"

const EndRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface ExportFormProps {
  onClose: () => void
}

const ExportForm = ({ onClose }: ExportFormProps) => {
  const { state } = useContext(AppContext)
  const [friendlyName, setFriendlyName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [update, setUpdate] = useState<false | string>(false)
  const [updateData, setUpdateData] = useState({
    friendly_name: "",
    json_content: "",
    emailaddress: "",
  })
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const [error, setError] = useState<string>("")
  const [copied, setCopied] = useState(false)

  const handleUpdate = async () => {
    setError("")
    setCopied(false)
    try {
      await apiUpdate(updateData)
      setUpdateSuccess(true)
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)
      console.warn("ERROR", message)
      setError(message)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setUpdate(false)
    setCopied(false)
    setUpdateData({
      friendly_name: "",
      json_content: "",
      emailaddress: "",
    })

    const data = {
      friendly_name: friendlyName,
      json_content: JSON.stringify(state),
      emailaddress: emailAddress,
    }

    try {
      const result = await apiPost(data)

      if (
        result.includes(
          "Friendly name already exists. Would you like to update"
        )
      ) {
        setUpdate(result)
      } else {
        setPostSuccess(true)
      }
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)
      if (message.includes("Your link was created successfully")) {
        setPostSuccess(true)
      } else if (
        message.includes(
          "Friendly name already exists. Would you like to update"
        )
      ) {
        setUpdate(message)
        setUpdateData(data)
      } else if (message.includes("Friendly name already exists.")) {
        console.warn("ERROR", message)
        setError("Friendly name already exists, please choose another.")
      } else {
        console.warn("ERROR", message)
        setError(message)
      }
    }
  }

  const getLinkText = (friendly_name: string) =>
    `https://nolatin.com/share/${friendly_name}`

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(true)
  }

  return (
    <div>
      {updateSuccess ? (
        <>
          <EndRow>
            <IconButton
              icon={X}
              aria="Close Modal"
              label="Close"
              onClick={onClose}
            />
          </EndRow>
          <p>Friendly name successfully updated.</p>
          <a
            href={getLinkText(updateData.friendly_name)}
            target="_blank"
            rel="noreferrer"
          >
            {getLinkText(updateData.friendly_name)}
          </a>
          <Button
            onClick={() => handleCopy(getLinkText(updateData.friendly_name))}
          >
            {copied ? "Copied!" : "Copy link to clipboard"}
          </Button>
        </>
      ) : (
        <>
          {postSuccess ? (
            <>
              <EndRow>
                <IconButton
                  icon={X}
                  aria="Close Modal"
                  label="Close"
                  onClick={onClose}
                />
              </EndRow>
              <p>
                Link successfully created, click the link to add it to your
                clipboard
              </p>
              <a
                href={getLinkText(friendlyName)}
                target="_blank"
                rel="noreferrer"
              >
                {getLinkText(friendlyName)}
              </a>
              <Button onClick={() => handleCopy(getLinkText(friendlyName))}>
                Copy link
              </Button>
            </>
          ) : (
            <>
              <EndRow>
                <IconButton
                  icon={X}
                  aria="Cancel Edit"
                  label="Cancel"
                  styles="margin-right: 24px"
                  onClick={onClose}
                />
                <IconButton
                  icon={Send}
                  color="var(--button-save-label)"
                  aria="Send"
                  label="Send"
                  styles="background:var(--share-bg);border-radius:4px;width:60px;"
                  onClick={handleSubmit}
                />
              </EndRow>

              <p>
                Add a <span className="friendlyName">friendly name</span> for
                your URL.
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="friendlyName">Friendly Name:</label>
                  <input
                    type="text"
                    id="friendlyName"
                    value={friendlyName}
                    onChange={(event) => setFriendlyName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emailAddress">Email Address:</label>
                  <input
                    type="email"
                    id="emailAddress"
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                    required
                  />
                </div>
                {update && (
                  <div>
                    <p>{update}</p>
                    <Button label="Update" onClick={handleUpdate}>
                      Update
                    </Button>
                  </div>
                )}
                {error && <p aria-live="polite">Error: {error}</p>}
              </form>
            </>
          )}
        </>
      )}
    </div>
  )
}

async function apiPost(data: any): Promise<string> {
  const response = await fetch("https://api.nolatin.com/json/save.php", {
    method: "POST",
    body: JSON.stringify(data),
  })
  const result = await response.json()
  console.log("RESULT", result)
  if (result.includes("Friendly name already exists.")) {
    throw new Error(result)
  } else if (response.ok) {
    return result
  } else {
    throw new Error(result.message)
  }
}

async function apiUpdate(data: any): Promise<string> {
  const response = await fetch("https://api.nolatin.com/json/update.php", {
    method: "POST",
    body: JSON.stringify(data),
  })
  const result = await response.json()
  console.log("RESULT", result)
  if (response.ok) {
    return result
  } else {
    throw new Error(result.message)
  }
}

export default ExportForm
