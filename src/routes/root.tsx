import React from "react"
import { Bold, Button, Text, Title, SubHeading, SubTitle } from "../components/"
import Layout from "../components/Layout"

export default function Root() {
  return (
    <Layout>
      <>
        <Title>No Latin</Title>
        <SubTitle>Stop procastinating. Do not use Lorem ipsum!</SubTitle>
        <Text>
          As UX professionals, we are committed to designing solutions as
          ambassadors for all users, including people with disabilities.
        </Text>
        <SubTitle>
          This tool invites all UX designers and researchers to bring intent
          into our design process by elevating the content quality early for
          People with Disabilities.
        </SubTitle>
        <SubHeading>As simple as 1, 2, 3.</SubHeading>
        <Text>
          Creating good content is a matter of putting intent in each step of
          your design effort.
        </Text>
        <Text>
          Adding placeholders like ”Lorem ipsum” only create barriers to start
          evaluating your solution with people with disabilities.
        </Text>
        <Bold>Instead, follow these tips:</Bold>
        <Text>
          <ol>
            <li>Write purposeful headlines</li>
            <li>A brief description for each headline</li>
            <li>
              If there's an action to a headline, state the expected action
            </li>
          </ol>
        </Text>
        <Button>Getting Started</Button>
      </>
    </Layout>
  )
}
