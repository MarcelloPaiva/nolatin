import React, { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"
import IconButton from "../IconButton"
import { Send, X } from "react-feather"

const EndRow = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CopyButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
`

interface ApiResponse {
  status: string
  message: string
}

const apiUrl = "https://api.nolatin.com/json/save.php"

interface ExportFormProps {
  onClose: () => void
}

const ExportForm = ({ onClose }: ExportFormProps) => {
  const { state } = useContext(AppContext)
  const [friendlyName, setFriendlyName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    const data = {
      friendly_name: friendlyName,
      json_content: JSON.stringify(state),
      emailaddress: emailAddress,
    }

    try {
      await postData(apiUrl, data)
      setSuccess(true)
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)

      if (message.includes("New record")) {
        setSuccess(true)
      } else if (message.includes("Fri")) {
        console.log("ERROR", message)
        setError("Error Friendly name already exists")
      } else {
        console.log("ERROR", message)
        setError(message)
      }
    }
  }

  const linkText = `https://nolatin.com/share/${friendlyName}`

  return (
    <div>
      {success ? (
        <>
          <EndRow>
            <IconButton
              icon={X}
              aria="Cancel Edit"
              label="Cancel"
              onClick={onClose}
            />
          </EndRow>
          <p>
            Link successfully created, click the link to add it to your
            clipboard
          </p>
          <CopyButton onClick={() => navigator.clipboard.writeText(linkText)}>
            <p>{linkText}</p>
          </CopyButton>
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
            Add a friendly name for your URL (example:
            https://nolatin.com/preview/
            <span className="friendlyName">myAccessiblePrototype</span>)
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
            {error && <p aria-live="polite">Error: {error}</p>}
          </form>
        </>
      )}
    </div>
  )
}

async function postData(url: string, data: any): Promise<ApiResponse> {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
  const result = await response.json()
  if (response.ok) {
    return result
  } else {
    throw new Error(result.message)
  }
}

export default ExportForm
