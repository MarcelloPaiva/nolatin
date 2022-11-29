import React, { useState } from "react"
import { Text, Title } from "../components/"
import Button from "../components/Button"
import SectionCard from "../components/SectionCard"
import Layout from "../components/Layout"
import Section from "../models/section"
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

  function addCard(sectionsData: Section[], id: string) {
    return sectionsData
    // let newCards = clone(sectionsData)
    // return newCards.map((section) => {
    //   if (section.id === id) {
    //     let newCard = clone(section)
    //     newCard.children.push({
    //       id: uuidv4(),
    //       section: {
    //         edit: true,
    //         name: "Header",
    //         description: "What's the user's expectation? Please describe.",
    //         element: ElementNames.Header,
    //         action: "How do you think the user will react?",
    //       },
    //       children: [],
    //     })
    //     return newCard
    //   } else if (section.children.length) {
    //     let newCard = clone(section)
    //     newCard.children = addCard(section.children, id)
    //     return newCard
    //   }
    //   return section
    // })
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
      // if (section.children.length > 0) {
      //   return (
      //     <SectionCard
      //       id={section.id}
      //       key={section.id}
      //       state={section}
      //       onAddChild={() => setSections(addCard(sections, section.id))}
      //       onCancel={() => setSections(cancelCard(sections, section.id))}
      //       onDelete={() => setSections(deleteCard(sections, section.id))}
      //       onEdit={() => setSections(editCard(sections, section.id))}
      //       onSave={(newCard: Story) =>
      //         setSections(updateCard(sections, section.id, newCard))
      //       }
      //     >
      //       {renderCards(section.content)}
      //     </SectionCard>
      //   )
      // }
      return (
        <SectionCard
          key={section.id}
          state={section}
          onAddChild={() => setSections(addCard(sections, section.id))}
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
