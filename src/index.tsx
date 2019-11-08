import * as React from "react"
import { render } from "react-dom"

import "./styles.css"

const Nav = ({ children }) => <div className="nav">{children}</div>

function App() {
  return (
    <div className="App">
      <Nav>Nav section...</Nav>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
