import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import { graphql, Link } from "gatsby"
import { Grid } from "@material-ui/core"

export default ({ data, pageContext: { numPages, currentPage } }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Bài viết mới nhất</h1>
      <Grid container>
        <Grid item style={{ marginBottom: `1.4rem` }}>
          {data.allMarkdownRemark.edges.map(
            ({ node: { frontmatter, excerpt, fields } }, index) => (
              <div key={index}>
                <PostPreview
                  title={frontmatter.title}
                  date={frontmatter.date}
                  excerpt={excerpt}
                  slug={fields.slug}
                />
              </div>
            )
          )}
        </Grid>
        <Grid item container direction={"row"} justify={"space-between"}>
          {currentPage === 1 ? (
            <p>Prev</p>
          ) : currentPage === 2 ? (
            <Link to={`/blog`}>Prev</Link>
          ) : (
            <Link to={`/blog/${currentPage - 1}`}>Prev</Link>
          )}
          {currentPage}
          {currentPage === numPages ? (
            <p>Next</p>
          ) : (
            <Link to={`/blog/${currentPage + 1}`}>Next</Link>
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
