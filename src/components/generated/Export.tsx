import React, { useState } from "react"
import styled from "styled-components"
import IconButton from "../IconButton"
import { Send, X } from "react-feather"

const EndRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface ApiResponse {
  status: string
  message: string
}

const apiUrl = "https://api.nolatin.com/json/save.php"

const PostDataExample = () => {
  const [friendlyName, setFriendlyName] = useState("")
  const [jsonContent, setJsonContent] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [error, setError] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    const data = {
      friendly_name: friendlyName,
      json_content: jsonContent,
      emailaddress: emailAddress,
    }

    try {
      const response = await postData(apiUrl, data)
      setResponse(response)
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleReset = () => {
    setFriendlyName("")
    setJsonContent("")
    setEmailAddress("")
    setResponse(null)
    setError("")
  }

  return (
    <div>
      <EndRow>
        <IconButton
          icon={X}
          aria="Cancel Edit"
          label="Cancel"
          styles="margin-right: 24px"
          //   onClick={handleCancel}
        />
        <IconButton
          icon={Send}
          color="var(--button-save-label)"
          aria="Send"
          label="Send"
          styles="background:var(--share-bg);border-radius:4px;width:60px;"
          //   onClick={handleSave}
        />
      </EndRow>

      <p>
        <p>
          Add a friendly name for your URL (example:
          https://nolatin.com/preview/
          <span className="friendlyName">myAccessiblePrototype</span>)
        </p>
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
          <label htmlFor="jsonContent">JSON Data:</label>
          <input
            id="jsonContent"
            type="text"
            value={jsonContent}
            onChange={(event) => setJsonContent(event.target.value)}
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
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      {response && (
        <div>
          <p>Status: {response.status}</p>
          <p>Message: {response.message}</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  )
}

async function postData(url: string, data: any): Promise<ApiResponse> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  if (response.ok) {
    return result
  } else {
    throw new Error(result.message)
  }
}

const ExportUi = () => {
  return (
    <div>
      <PostDataExample />
    </div>
  )
}

export default ExportUi
