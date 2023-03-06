import React, { useState } from "react"

interface ApiResponse {
  status: string
  message: string
}

const apiUrl = "https://api.nolatin.com/json"

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
          <label htmlFor="jsonContent">JSON Content:</label>
          <textarea
            id="jsonContent"
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
      <h1>Enter JSON Data</h1>
      <PostDataExample />
    </div>
  )
}

export default ExportUi
