import React from "react"
import { Text, Title } from "../components/"
import Button from "../components/Button"
import Card from "../components/Card"
import Layout from "../components/Layout"

export default function Create() {
  return (
    <Layout>
      <Text>Step 1</Text>
      <Title>Priority Guides</Title>
      <Text>Create</Text>
      <Text>Add as many headlines you think your view would require.</Text>
      <Card />
      <Button>Add a headline</Button>
    </Layout>
  )
}
