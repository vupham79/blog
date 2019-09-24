import PropTypes from "prop-types"
import React from "react"
import { Grid } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <div className={"mainNav"}>
    <Grid container justify={"space-around"}>
      <Grid item md={4}>
        <button>Back</button>
      </Grid>
      <Grid item md={6}>
        <ul>
          <li>Blog</li>
          <li>About Me</li>
          <li></li>
        </ul>
      </Grid>
    </Grid>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
