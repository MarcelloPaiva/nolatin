import Section from "./section"

export default interface Page {
  id: string
  title: string
  description: string
  sections: Section[]
}
