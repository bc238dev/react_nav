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

const Layout = props => {
  return (
    <div className="layout">
      <div className="top">{props.top}</div>
      <div className="left">{props.left}</div>
      <div className="center">{props.center}</div>
    </div>
  )
}

/*
<Layout
  left={<Sidebar/>}
  top={<NavBar/>}
  center={<Content/>}
/>
*/

// const App = () => {
//   return (
//     <div className="App">
//       <Nav>Nav section...</Nav>
//       <Body sidebar={<div>Sidebar...</div>} content={<Content />} />
//     </div>
//   )
// }

const App = () => {
  return (
    <Layout
      left={<Nav>Nav section...</Nav>}
      top={<Nav>Nav Top</Nav>}
      center={<Body sidebar={<div>Sidebar...</div>} content={<Content />} />}
    />
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
