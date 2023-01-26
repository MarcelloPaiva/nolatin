import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import Header from "../components/generated/Header"
import Section from "../models/section"
import Content from "../models/content"
import { ElementNames } from "../constants/elements"

export default function Preview() {
  const { pageId } = useParams()
  const { state, getPage } = useContext(AppContext)
  const page = getPage(pageId ?? "")
  return (
    <div>
      <Header
        title={page?.title ?? ""}
        pages={state.pages.map((page) => page.id)}
      />
      <main>{generateSections(page?.sections ?? [])}</main>
    </div>
  )
}

function generateSections(sections: Section[]) {
  return sections.map((section) => {
    const content = (
      <>
        <h2>{section.name}</h2>
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
      default:
        return null
    }
  })
}

function generateContents(contents: Content[]) {
  return contents.map((content) => null)
}
