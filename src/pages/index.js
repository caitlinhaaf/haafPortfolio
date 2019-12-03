import React from "react"

import Layout from "../layouts/layout"
import SkillsGroup from "../layouts/skillsGroup/skillsGroup.js"
import BodySection from "../components/bodySection/bodySection.js"
import ProjectTile from "../components/projectTile/projectTile"
import Btn from "../components/button/button.js"

// import CircleIcon from "../components/circleIcon/circleIcon.js"
// import JobListing from "../components/jobListing/jobListing.js"
import SkillIcon from "../components/skillIcon/skillIcon.js"

class Homepage extends React.Component {
  render(){
    const { data } = this.props
    const projects = data.allMarkdownRemark.edges

    return(
      <Layout title="Home" header={true}>
        {/* ABOUT */}
        <BodySection
          sectionID="about"
          sectionHdr="About Me">
          <p>
            I'm a front-end developer based out of Toronto with a background in design looking for a position where I can continue my work with design systems, create engaging user experiences, and feel like an integral part of a team.
            <br/><br/>
            When not at work, you will find me working on a new craft project, listening to a true crime podcast, or walking my hound dogs through High Park.
          </p>
        </BodySection>


        {/* SKILLS */}
        <BodySection
          sectionID="skills"
          sectionStyle="dark">

            <SkillsGroup groupName="Technical Skills">
              <SkillIcon iconSrc="imgs/HTML5logo.svg" iconAlt="HTML 5 Logo" skillTxt="HTML"/>
              <SkillIcon iconSrc="imgs/CSS3logo.svg" iconAlt="CSS 3 Logo" skillTxt="CSS"/>
              <SkillIcon iconSrc="imgs/jsLogo.svg" iconAlt="Javascript Icon" skillTxt="Javascript"/>
              <SkillIcon iconSrc="imgs/gatsbyLogo.svg" iconAlt="GatsbyJS Logo" skillTxt="GatsbyJS"/>
              <SkillIcon iconSrc="imgs/reactIcon.svg" iconAlt="ReactJS Logo" skillTxt="ReactJS"/>
              <SkillIcon iconSrc="imgs/reduxLogo.svg" iconAlt="Redux Logo" skillTxt="Redux"/>
              <SkillIcon iconSrc="imgs/nodeLogo.svg" iconAlt="NodeJS Logo" skillTxt="NodeJS"/>
            </SkillsGroup>

            <SkillsGroup groupName="Development Tools">
              <SkillIcon iconSrc="imgs/gitLogo.svg" iconAlt="Git Logo" skillTxt="Git"/>
              <SkillIcon iconSrc="imgs/gulpLogo.svg" iconAlt="Gulp Logo" skillTxt="Gulp"/>
              <SkillIcon iconSrc="imgs/npmLogo.svg" iconAlt="NPM Logo" skillTxt="NPM"/>
              <SkillIcon iconSrc="imgs/sassLogo.svg" iconAlt="Sass Logo" skillTxt="Sass"/>
              <SkillIcon iconSrc="imgs/sourcetreeLogo.svg" iconAlt="Sourcetree Logo" skillTxt="Sourcetree"/>
              <SkillIcon iconSrc="imgs/webpackLogo.svg" iconAlt="Webpack Logo" skillTxt="Webpack"/>
              <SkillIcon iconSrc="imgs/WordPressLogo.svg" iconAlt="Wordpress Logo" skillTxt="Wordpress"/>
            </SkillsGroup>

            {/* <SkillsGroup groupName="Design Programs">
              <SkillIcon iconSrc="imgs/afterEffectsLogo.svg" iconAlt="Adobe AfterEffects Logo" skillTxt="AfterEffects"/>
              <SkillIcon iconSrc="imgs/illustratorLogo.svg" iconAlt="Adobe Illustrator Logo" skillTxt="Illustrator"/>
              <SkillIcon iconSrc="imgs/invision-seeklogo.com.svg" iconAlt="Invision Logo" skillTxt="Invision"/>
              <SkillIcon iconSrc="imgs/photoshopLogo.svg" iconAlt="Adobe Photoshop Logo" skillTxt="Photoshop"/>
              <SkillIcon iconSrc="imgs/premiereLogo.svg" iconAlt="Adobe Premiere Logo" skillTxt="Premiere"/>
              <SkillIcon iconSrc="imgs/xdLogo.svg" iconAlt="Adobe Xd Logo" skillTxt="Xd"/>
            </SkillsGroup> */}

            <SkillsGroup groupName="Currently Learning">
              <SkillIcon iconSrc="imgs/d3jsLogo.svg" iconAlt="D3JS Logo" skillTxt="D3JS" dimmed/>
              <SkillIcon iconSrc="imgs/jestLogo.svg" iconAlt="JestJS Logo" skillTxt="Jest JS" dimmed/>
              <SkillIcon iconSrc="imgs/mongodb.svg" iconAlt="MongoDB Logo" skillTxt="Mongo DB" dimmed/>
              <SkillIcon iconSrc="imgs/vueLogo.svg" iconAlt="Vue JS Logo" skillTxt="Vue JS" dimmed/>
            </SkillsGroup>

        </BodySection>

        {/* PROJECTS */}
        <BodySection
          sectionID="work"
          sectionHdr="Work">
          {
            projects.map(({node})=> (
              <ProjectTile 
                key={node.fields.slug}
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                description={node.excerpt}
                slug={node.fields.slug}/>
            ))
          }
        </BodySection>

        {/* CONTACT */}
        <BodySection
          sectionID="contact"
          sectionHdr="Keep In Touch!">
          <p>
            Think you have a project or opportunity that I would be a good fit for?<br/>I would love to meet up for a coffee, or simply a chat!
          </p>

          <section className="section--btnGroup">
            <form
              action="mailto:me@caitlinhaaf.com" method="post">
              <Btn
                buttonTxt="Drop Me A Line"
                buttonStyle="dark"
                buttonIcon="imgs/email.svg"
                iconAlt="Email icon"/>
            </form>

            <form action="https://www.linkedin.com/in/caitlin-haaf-6517487b/" method="get" target="_blank">
              <Btn
                buttonTxt="Visit My LinkedIn"
                buttonStyle="light"
                buttonIcon="imgs/linkedinLogo.svg"
                iconAlt="LinkedIn logo"/>
            </form>

            <form
              action="docs/haafresume_2019.pdf"
              method="get"
              target="_blank">
              <Btn
                buttonTxt="Download Resume"
                buttonStyle="dark"
                buttonIcon="imgs/pdf.svg"
                iconAlt="PDF logo"/>
            </form>
          </section>
        </BodySection>
      </Layout>
    )
  }
}

export default Homepage;

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
          excerpt(pruneLength: 300)
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


// import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <article key={node.fields.slug}>
//               <header>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//               </header>
//               <section>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           )
//         })}
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
