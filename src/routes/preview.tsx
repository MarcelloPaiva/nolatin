import { useContext, useEffect } from "react"
import { AppContext, AppContextState } from "../context/AppContext"
import { useParams, redirect } from "react-router-dom"
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
`

async function fetchJSON(name?: string) {
  if (!name) return undefined
  const response = await fetch(
    `https://api.nolatin.com/json/?friendly_name=${name}`,
    {
      method: "GET",
    }
  )
  const json = await response.json()
  return JSON.parse(json[0].json_content) as AppContextState
}

interface PreviewProps {
  share?: boolean
}

export default async function Preview({ share = false }: PreviewProps) {
  const { name, pageId } = useParams()
  const apiState = await fetchJSON(name)
  const apiPage = apiState?.pages.find((page) => page.id === pageId) ?? null
  console.log("API PAGE", apiPage, name)

  useEffect(() => {
    if (apiState && share && name && !pageId) {
      redirect(`/share/${name}/${apiState?.pages[0].id}`)
    }
  }, [apiState, name, pageId, share])

  const { state, getPage } = useContext(AppContext)
  const page = share ? apiPage : getPage(pageId ?? "")

  useEffect(() => {
    if (page?.title) document.title = page.title
    if (page?.description)
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", page.description)
  }, [page])

  function getPages() {
    if (share) {
      return (
        apiState?.pages.map((page) => ({
          id: page.id,
          title: page.title,
        })) ?? []
      )
    } else {
      return state.pages.map((page) => ({ id: page.id, title: page.title }))
    }
  }

  return (
    <ExportApp className="exportApp">
      <Header
        title={page?.title ?? ""}
        pages={getPages()}
        info={page?.description ?? ""}
        shareName={share ? name : undefined}
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
        return (
          <header
            aria-label={`${section.name}`}
            title={`${section.description}`}
          >
            {content}
          </header>
        )
      case ElementNames.Footer:
        return (
          <footer
            aria-label={`${section.name}`}
            title={`${section.description}`}
          >
            {content}
          </footer>
        )
      case ElementNames.Navigation:
        return (
          <nav aria-label={`${section.name}`} title={`${section.description}`}>
            {content}
          </nav>
        )
      case ElementNames.Section:
        return (
          <section
            aria-label={`${section.name}`}
            title={`${section.description}`}
          >
            {content}
          </section>
        )
      case ElementNames.Form:
        return (
          <form aria-label={`${section.name}`} title={`${section.description}`}>
            {content}
          </form>
        )
      case ElementNames.Search:
        return (
          <form
            role="search"
            aria-label={`${section.name}`}
            title={`${section.description}`}
          >
            {content}
          </form>
        )
      case ElementNames.Complementary:
        return (
          <aside
            aria-label={`${section.name}`}
            title={`${section.description}`}
          >
            {content}
          </aside>
        )
      case ElementNames.Alert:
        return (
          <section
            role="alert"
            aria-label="Alert"
            aria-atomic="true"
            aria-describedby={`${section.description}`}
          >
            {content}
          </section>
        )
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
            {getQuoteList(content.description)?.map((item) => {
              const urlArray = item.split(", ")
              if (urlArray.length > 1) {
                return (
                  <li key={content.id + item}>
                    <a href={urlArray[1]}>{urlArray[0]}</a>
                  </li>
                )
              }
              return (
                <li key={content.id + item}>
                  <a href={item}>{item}</a>
                </li>
              )
            })}
          </ul>
        )
      case ContentTypes.Button:
        // What do I do with "Button Action"?
        return (
          <Button link={content.url !== "" ? content.url : undefined}>
            {content.title}
          </Button>
        )
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
            {getQuoteList(content.description)?.map((item) => {
              const urlArray = item.split(", ")
              if (urlArray.length > 1) {
                return (
                  <li key={content.id + item}>
                    <a href={urlArray[1]}>{urlArray[0]}</a>
                  </li>
                )
              }
              return (
                <li key={content.id + item}>
                  <a href={item}>{item}</a>
                </li>
              )
            })}
          </ol>
        )
      case ContentTypes.HeadingLink:
        return (
          <>
            {getHeading(
              headingLevel,
              content.title,
              `h-desc-${content.id}`,
              content.url
            )}
            <p id={`h-desc-${content.id}`}>{content.description}</p>
          </>
        )
      case ContentTypes.HeadingText:
        return (
          <>
            {getHeading(headingLevel, content.title, `h-desc-${content.id}`)}
            <p id={`h-desc-${content.id}`}>{content.description}</p>
          </>
        )
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

function getHeading(
  level: number,
  text: string,
  describedBy?: string,
  link?: string
) {
  let inner = link ? <a href={link}>{text}</a> : text
  switch (level) {
    case 1:
      return <h1 aria-describedby={describedBy}>{inner}</h1>
    case 2:
      return <h2 aria-describedby={describedBy}>{inner}</h2>
    case 3:
      return <h3 aria-describedby={describedBy}>{inner}</h3>
    case 4:
      return <h4 aria-describedby={describedBy}>{inner}</h4>
    case 5:
      return <h5 aria-describedby={describedBy}>{inner}</h5>
    default:
      return <h6 aria-describedby={describedBy}>{inner}</h6>
  }
}
