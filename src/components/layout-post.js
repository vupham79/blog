import React from "react"
import Header from "./header"
import SEO from "./seo"
import "./layout.css"

const PostLayout = ({ children, title }) => {
  return (
    <>
      <Header />
      <SEO title={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `66.875rem`,
          padding: 40,
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PostLayout
