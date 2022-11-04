import React from "react"
import { Aperture, Search, Menu } from "react-feather"
import IconButton from "./IconButton"

export default function NavBar() {
  return (
    <header>
      <IconButton icon={Aperture} onClick={() => {}} label="Logo" />
      <IconButton icon={Search} onClick={() => {}} label="Search" />
      <IconButton icon={Menu} onClick={() => {}} label="Menu" />
    </header>
  )
}
