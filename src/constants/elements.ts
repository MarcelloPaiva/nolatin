import Element from "../models/element"
import { Role } from "../models/roles"

const Elements: { [key in ElementNames]: Element } = {
  Article: {
    name: "Article",
    tag: "article",
    roles: [Role.Article],
  },
  Header: {
    name: "Header",
    tag: "header",
    roles: [Role.Banner],
  },
  Footer: {
    name: "Footer",
    tag: "footer",
    roles: [Role.ContentInfo],
  },
  Navigation: {
    name: "Navigation",
    tag: "nav",
    roles: [Role.Navigation],
  },
  Section: {
    name: "Section",
    tag: "section",
    roles: [Role.Region],
  },
}

export enum ElementNames {
  Article = "Article",
  Header = "Header",
  Footer = "Footer",
  Navigation = "Navigation",
  Section = "Section",
}

export default Elements
