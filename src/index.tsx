import * as React from "react"
import { render } from "react-dom"

import "./styles.css"

const Nav = ({ children }) => <div className="nav">{children}</div>

const Body = ({ sidebar, content }) => (
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    {content}
  </div>
)

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>

const Content = () => <div className="content">Main Content Will Be Here!</div>

function App() {
  return (
    <div className="App">
      <Nav>Nav section...</Nav>
      <Body sidebar={<div>Sidebar...</div>} content={<Content />} />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
