import React from "react"
import Header from "./Header"
import Menu from "./Sidebar"
import Tasks from "./Tasks"

const Template: React.FC = (props) => {
  return (
    <>
      <Header />
      <Menu />
      <Tasks />
    </>
  )
}

export default Template
