import React, { useState } from "react"
import { Text, Title } from "../components/"
import Button from "../components/Button"
import SectionCard from "../components/SectionCard"
import Layout from "../components/Layout"
import Section from "../models/section"
import Content from "../models/content"
import { ElementNames } from "../constants/elements"
import { clone } from "../utilities/arrayUtilities"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 480px;
`

export default function Create() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: uuidv4(),
      edit: true,
      name: "Header",
      element: ElementNames.Header,
      content: [],
    },
  ])

  function addContent(sectionsData: Section[], id: string) {
    let newSections = clone(sectionsData)
    return newSections.map((section) => {
      if (section.id === id) {
        let newSection = clone(section)
        newSection.content.push({
          id: uuidv4(),
          edit: true,
          name: "",
        })
        return newSection
      }
      return section
    })
  }

  function cancelCard(sectionsData: Section[], id: string) {
    return sectionsData
    // let newCards = clone(sectionsData)
    // return newCards.map((card) => {
    //   if (card.id === id) {
    //     let newCard = clone(card)
    //     newCard.edit = false
    //     return newCard
    //   } else if (card.content.length) {
    //     let newCard = clone(card)
    //     newCard.content = cancelCard(card.children, id)
    //     return newCard
    //   }
    //   return card
    // })
  }

  function deleteContent(
    sectionsData: Section[],
    sectionId: string,
    contentId: string
  ) {
    let newSections = clone(sectionsData)
    return newSections.map((section) => {
      if (section.id === sectionId) {
        let newSection = clone(section)
        newSection.content = section.content.filter((content) => {
          if (content.id === contentId) {
            return false
          }
          return true
        })
        return newSection
      }
      return section
    })
  }

  function deleteCard(sectionsData: Section[], id: string) {
    return sectionsData
    // let newCards = clone(sectionsData)
    // return newCards.filter(function filterCards(section) {
    //   if (section.id === id) {
    //     let newCard = clone(section)
    //     newCard.section.edit = false
    //     return false
    //   } else if (section.children.length) {
    //     section.children = section.children.filter(filterCards)
    //   }
    //   return true
    // })
  }

  function editCard(sectionsData: Section[], id: string) {
    return sectionsData
    // let newCards = clone(sectionsData)
    // return newCards.map((section) => {
    //   if (section.id === id) {
    //     let newCard = clone(section)
    //     newCard.section.edit = true
    //     return newCard
    //   } else if (section.children.length) {
    //     let newCard = clone(section)
    //     newCard.children = editCard(section.children, id)
    //     return newCard
    //   }
    //   return section
    // })
  }

  function updateContent(
    sectionsData: Section[],
    sectionId: string,
    contentId: string,
    newContentData: Content
  ) {
    let newSections = clone(sectionsData)
    return newSections.map((section) => {
      if (section.id === sectionId) {
        let newSection = clone(section)
        newSection.content = section.content.map((content) => {
          if (content.id === contentId) {
            return newContentData
          }
          return content
        })
        return newSection
      }
      return section
    })
  }

  function updateCard(
    sectionsData: Section[],
    id: string,
    newCardData: Section
  ) {
    return sectionsData
    // let newCards = clone(sectionsData)
    // return newCards.map((section) => {
    //   if (section.id === id) {
    //     let newCard = clone(section)
    //     newCard.section = newCardData
    //     return newCard
    //   } else if (section.children.length) {
    //     let newCard = clone(section)
    //     newCard.children = updateCard(section.children, id, newCardData)
    //     return newCard
    //   }
    //   return section
    // })
  }

  function addSection() {
    let newCards = clone(sections)
    newCards.push({
      id: uuidv4(),
      edit: true,
      name: "Header",
      element: ElementNames.Header,
      content: [],
    })
    setSections(newCards)
  }

  function renderCards(sectionsData: Section[]) {
    return sectionsData.map((section) => {
      return (
        <SectionCard
          key={section.id}
          state={section}
          onDeleteContent={(contentId: string) =>
            setSections(deleteContent(sections, section.id, contentId))
          }
          onUpdateContent={(contentId: string, contentData: Content) =>
            setSections(
              updateContent(sections, section.id, contentId, contentData)
            )
          }
          onAddChild={() => setSections(addContent(sections, section.id))}
          onCancel={() => setSections(cancelCard(sections, section.id))}
          onDelete={() => setSections(deleteCard(sections, section.id))}
          onEdit={() => setSections(editCard(sections, section.id))}
          onSave={(newCard: Section) =>
            setSections(updateCard(sections, section.id, newCard))
          }
        />
      )
    })
  }

  return (
    <Layout
      style={`
        h1 {
          align-self: flex-start;
        }
    `}
    >
      <Root>
        <Text>Step 1</Text>
        <Title>Priority Guides</Title>
        <Text>Create</Text>
        <Text>Add as many headlines you think your view would require.</Text>
        <Column>{renderCards(sections)}</Column>
        <Button onClick={addSection}>Add a headline</Button>
      </Root>
    </Layout>
  )
}
