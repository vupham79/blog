/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: 10,
      }}
    >
      <Grid container>
        <Grid
          item
          md={4}
          style={{ padding: "20px", borderRight: "0.5px solid black" }}
        >
          <img
            alt="Vu Pham"
            src="https://c.ndtvimg.com/2019-07/2t829hlo_govinda-twitter_625x300_31_July_19.jpg"
          />
          <span className="title">Blog của Tiger</span>
          <br />
          <p className="description">Lập Trình và Cuộc Sống</p>
          <Menu />
          <footer>© Vu Pham {new Date().getFullYear()}</footer>
        </Grid>
        <Grid item md={6} style={{ padding: "20px" }}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
