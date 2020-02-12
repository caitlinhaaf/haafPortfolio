import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BodySection from "../components/bodySection/bodySection"
import Btn from "../components/button/button"

class ProjectPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BodySection>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <div className="flexContainer">
                <form action={post.frontmatter.siteLink} method="get" target="_blank">
                  <Btn
                    buttonTxt="View Project"
                    buttonStyle="dark"
                    // buttonIcon="imgs/email.svg"
                    iconAlt="External link icon"/>
                </form>
                <form action={post.frontmatter.githubLink} method="get" target="_blank">
                  <Btn
                    buttonTxt="View on Github"
                    buttonStyle="dark"
                    // buttonIcon="imgs/email.svg"
                    iconAlt="Github logo"/>
                </form>
              </div>
              <p
              >
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </BodySection>

        <nav style={{backgroundColor: `white`, padding: `1rem 0`}}>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <>
                  <span style={{color: `#999`}}>Previous Project</span><br/>
                  <Link to={previous.fields.slug} rel="prev">
                    &lt; {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
            <li>
              {next && (
                <>
                  <span style={{color: `#999`}}>Next Project</span><br/>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} &gt;
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        siteLink
        githubLink
      }
    }
  }
`
