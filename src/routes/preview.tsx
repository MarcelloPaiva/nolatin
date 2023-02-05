import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/generated/Header"
import Section from "../models/section"
import Content from "../models/content"
import { ElementNames } from "../constants/elements"
import { ContentTypes } from "../constants/contentTypes"
import { getQuoteList } from "../utilities/listUtilities"
import Button from "../components/Button"
import Dropdown from "../components/Dropdown"
import Input from "../components/Input"

const Image = styled.img`
  border: 1px solid #a8a8a8;
  width: 100%;
`

const ExportApp = styled.div`
  font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
`
const Main = styled.main`
  background-color: #fff;
  margin: 0;
  padding: 40px;
`
export default function Preview() {
  const { pageId } = useParams()
  const { state, getPage } = useContext(AppContext)
  const page = getPage(pageId ?? "")
  return (
    <ExportApp className="exportApp">
      <Header
        title={page?.title ?? ""}
        pages={state.pages.map((page) => ({ id: page.id, title: page.title }))}
        info={page?.description ?? ""}
      />
      <Main>{generateSections(page?.sections ?? [])}</Main>
    </ExportApp>
  )
}

function generateSections(sections: Section[]) {
  return sections.map((section) => {
    const content = (
      <>
        <h2>{section.name}</h2>
        {section.description && <p>{section.description}</p>}
        {generateContents(section.children)}
      </>
    )
    switch (section.element) {
      case ElementNames.Article:
        return <article>{content}</article>
      case ElementNames.Header:
        return <header>{content}</header>
      case ElementNames.Footer:
        return <footer>{content}</footer>
      case ElementNames.Navigation:
        return <nav>{content}</nav>
      case ElementNames.Section:
        return <section>{content}</section>
      case ElementNames.Form:
        return <form>{content}</form>
      case ElementNames.Search:
        return <form role="search">{content}</form>
      case ElementNames.Complementary:
        return <aside>{content}</aside>
      case ElementNames.Alert:
        return <div role="alert">{content}</div>
      default:
        return null
    }
  })
}

function generateContents(contents: Content[], level?: number) {
  let headingLevel = level ?? 3
  return contents.map((content) => {
    switch (content.type) {
      case ContentTypes.Bullets:
        return (
          <ul>
            {getQuoteList(content.description)?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )
      case ContentTypes.BulletsLink:
        return (
          <ul>
            {getQuoteList(content.description)?.map((item) => (
              <li>
                <a href="item">{item}</a>
              </li>
            ))}
          </ul>
        )
      case ContentTypes.Button:
        // What do I do with "Button Action"?
        return <Button>{content.title}</Button>
      case ContentTypes.Dropdown:
        return (
          <Dropdown
            label={content.title}
            options={
              getQuoteList(content.description)?.map((option) => ({
                label: option,
                value: option,
              })) ?? []
            }
          />
        )
      case ContentTypes.Image:
        return (
          <>
            <Image src={content.url} alt={content.title} />
            <p>{content.description}</p>
          </>
        )
      case ContentTypes.Input:
        return <Input label={content.title} type={content.url} />
      case ContentTypes.Link:
        return <a href={content.url}>{content.title}</a>
      case ContentTypes.Numbers:
        return (
          <ol>
            {getQuoteList(content.description)?.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        )
      case ContentTypes.NumbersLink:
        return (
          <ol>
            {getQuoteList(content.description)?.map((item) => (
              <li>
                <a href="item">{item}</a>
              </li>
            ))}
          </ol>
        )
      case ContentTypes.HeadingLink:
        return getHeading(headingLevel, content.title, content.url)
      case ContentTypes.HeadingText:
        return getHeading(headingLevel, content.title)
      case ContentTypes.Paragraph:
        return <p>{content.title}</p>
      case ContentTypes.Title:
        return (
          <section>
            {getHeading(headingLevel, content.title)}
            <p>{content.description}</p>
            {generateContents(content.children, headingLevel + 1)}
          </section>
        )
      default:
        return null
    }
  })
}

function getHeading(level: number, text: string, link?: string) {
  let inner = link ? <a href={link}>{text}</a> : text
  switch (level) {
    case 1:
      return <h1>{inner}</h1>
    case 2:
      return <h2>{inner}</h2>
    case 3:
      return <h3>{inner}</h3>
    case 4:
      return <h4>{inner}</h4>
    case 5:
      return <h5>{inner}</h5>
    default:
      return <h6>{inner}</h6>
  }
}
