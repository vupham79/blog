import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <ul
    style={{
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      margin: 0,
    }}
  >
    <li>
      <Link to="/blog" className={`btn btn-menu`}>
        Blog
      </Link>
    </li>
    <li>
      <Link to="/about" className={`btn btn-menu`}>
        About Me
      </Link>
    </li>
  </ul>
)

export default Menu
