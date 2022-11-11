import React, { useState } from "react"
import { Text, Title } from "../components/"
import Button from "../components/Button"
import Card from "../components/Card"
import Layout from "../components/Layout"
import Story from "../models/story"
import { ElementNames } from "../constants/elements"
import { clone } from "../utilities/arrayUtilities"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

export type CardData = {
  id: string
  card: Story
  children: CardData[]
}
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Create() {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: uuidv4(),
      card: {
        edit: true,
        name: "Header",
        description: "What's the user's expectation? Please describe.",
        element: ElementNames.Header,
        action: "How do you think the user will react?",
      },
      children: [],
    },
  ])

  function addCard(cardsData: CardData[], id: string) {
    let newCards = clone(cardsData)
    return newCards.map((card) => {
      if (card.id === id) {
        let newCard = clone(card)
        newCard.children.push({
          id: uuidv4(),
          card: {
            edit: true,
            name: "Header",
            description: "What's the user's expectation? Please describe.",
            element: ElementNames.Header,
            action: "How do you think the user will react?",
          },
          children: [],
        })
        return newCard
      } else if (card.children.length) {
        let newCard = clone(card)
        newCard.children = addCard(card.children, id)
        return newCard
      }
      return card
    })
  }

  function cancelCard(cardsData: CardData[], id: string) {
    let newCards = clone(cardsData)
    return newCards.map((card) => {
      if (card.id === id) {
        let newCard = clone(card)
        newCard.card.edit = false
        return newCard
      } else if (card.children.length) {
        let newCard = clone(card)
        newCard.children = cancelCard(card.children, id)
        return newCard
      }
      return card
    })
  }

  function deleteCard(cardsData: CardData[], id: string) {
    let newCards = clone(cardsData)
    return newCards.filter(function filterCards(card) {
      if (card.id === id) {
        let newCard = clone(card)
        newCard.card.edit = false
        return false
      } else if (card.children.length) {
        card.children = card.children.filter(filterCards)
      }
      return true
    })
  }

  function editCard(cardsData: CardData[], id: string) {
    let newCards = clone(cardsData)
    return newCards.map((card) => {
      if (card.id === id) {
        let newCard = clone(card)
        newCard.card.edit = true
        return newCard
      } else if (card.children.length) {
        let newCard = clone(card)
        newCard.children = editCard(card.children, id)
        return newCard
      }
      return card
    })
  }

  function updateCard(cardsData: CardData[], id: string, newCardData: Story) {
    let newCards = clone(cardsData)
    return newCards.map((card) => {
      if (card.id === id) {
        let newCard = clone(card)
        newCard.card = newCardData
        return newCard
      } else if (card.children.length) {
        let newCard = clone(card)
        newCard.children = updateCard(card.children, id, newCardData)
        return newCard
      }
      return card
    })
  }

  function renderCards(cardsData: CardData[]) {
    return cardsData.map((card) => {
      if (card.children.length > 0) {
        return (
          <Card
            id={card.id}
            key={card.id}
            state={card.card}
            onAddChild={() => setCards(addCard(cards, card.id))}
            onCancel={() => setCards(cancelCard(cards, card.id))}
            onDelete={() => setCards(deleteCard(cards, card.id))}
            onEdit={() => setCards(editCard(cards, card.id))}
            onSave={(newCard: Story) =>
              setCards(updateCard(cards, card.id, newCard))
            }
          >
            {renderCards(card.children)}
          </Card>
        )
      }
      return (
        <Card
          id={card.id}
          key={card.id}
          state={card.card}
          onAddChild={() => setCards(addCard(cards, card.id))}
          onCancel={() => setCards(cancelCard(cards, card.id))}
          onDelete={() => setCards(deleteCard(cards, card.id))}
          onEdit={() => setCards(editCard(cards, card.id))}
          onSave={(newCard: Story) =>
            setCards(updateCard(cards, card.id, newCard))
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
      <Text>Step 1</Text>
      <Title>Priority Guides</Title>
      <Text>Create</Text>
      <Text>Add as many headlines you think your view would require.</Text>
      <Column>{renderCards(cards)}</Column>
      <Button
        onClick={() => {
          let newCards = clone(cards)
          newCards.push({
            id: uuidv4(),
            card: {
              edit: true,
              name: "Header",
              description: "What's the user's expectation? Please describe.",
              element: ElementNames.Header,
              action: "How do you think the user will react?",
            },
            children: [],
          })
          setCards(newCards)
        }}
      >
        Add a headline
      </Button>
    </Layout>
  )
}
