import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts/layout"
import BodySection from "../components/bodySection/bodySection.js"
import ProjectTile from "../components/projectTile/projectTile"

class ProjectsPage extends React.Component {
  render(){
    const { data } = this.props
    const projects = data.allMarkdownRemark.edges

    return(
      <Layout title="Projects">
        {/* PROJECTS */}
        <BodySection
          sectionID="work"
          sectionHdr="Projects">
          {projects.map((project, i) => (
            <ProjectTile 
            key={i}
            date={project.node.frontmatter.date}
            title={project.node.frontmatter.title}
            description={project.node.excerpt}
            slug={project.node.fields.slug}/>
          ))
          }
        </BodySection>
      </Layout>
    )
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 500)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`