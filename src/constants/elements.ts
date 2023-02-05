import Element from "../models/element"
import { Role } from "../models/roles"

const Elements: { [key in ElementNames]: Element } = {
  Section: {
    name: "Section",
    tag: "section",
    roles: [Role.Region],
  },
  // Main: {
  //   name: "Main",
  //   tag: "main",
  //   roles: [Role.Main],
  // },
  Header: {
    name: "Header",
    tag: "header",
    roles: [Role.Banner],
  },
  Form: {
    name: "Form",
    tag: "form",
    roles: [Role.Form],
  },
  Navigation: {
    name: "Navigation",
    tag: "nav",
    roles: [Role.Navigation],
  },
  Search: {
    name: "Search",
    tag: "form",
    roles: [Role.Form, Role.Search],
  },
  Footer: {
    name: "Footer",
    tag: "footer",
    roles: [Role.ContentInfo],
  },
  Complementary: {
    name: "Complementary",
    tag: "aside",
    roles: [Role.Complementary],
  },
  Alert: {
    name: "Alert",
    tag: "div",
    roles: [],
  },
  Article: {
    name: "Article",
    tag: "article",
    roles: [Role.Article],
  },
}

export enum ElementNames {
  Alert = "Alert",
  Article = "Article",
  Complementary = "Complementary",
  Header = "Header",
  Form = "Form",
  Footer = "Footer",
  Navigation = "Navigation",
  Search = "Search",
  Section = "Section",
  // Main = "Main",
}

export default Elements
