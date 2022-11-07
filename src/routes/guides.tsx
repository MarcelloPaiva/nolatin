import React from "react"
import { Divider, Text, Title, SubTitle, SubTitleBold } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"

export default function Guides() {
  return (
    <Layout>
      <Title>No Latin</Title>
      <SubTitle>Content design leads to good Accessibility.</SubTitle>
      <Text>
        As UX professionals, we are committed to designing solutions as
        ambassadors for all users, including people with disabilities.
      </Text>
      <Text>
        This tool invites all UX designers and researchers to bring intent into
        our design process by elevating the content quality early for People
        with Disabilities.
      </Text>
      <Divider />
      <SubTitleBold>Step 1 - Create Priority Guides</SubTitleBold>
      <Text>
        A good way to start focusing on the content design is using a method
        called Priority Guides to evolve your content into accessible
        prototyping, which you can start evaluating with assistive technologies
        early in the design process.
      </Text>
      <Text>
        Priority guide contains content and elements for a mobile screen, sorted
        by hierarchy from top to bottom and without layout specifications. The
        hierarchy is based on relevance to users, with the content most critical
        to satisfying user needs. (credits)
      </Text>
      <Text>
        The following examples show the content hierachy for a Job Board page:
      </Text>
      <Button styles={`margin: 40px 0px`} link="create">
        Create Priority Guides
      </Button>
      <Divider />
    </Layout>
  )
}
