import React from "react"

import Layout from "../layouts/layout"
import SkillsGroup from "../layouts/skillsGroup/skillsGroup.js"
import Tablist from "../components/tablist/tablist.js"
import BodySection from "../components/bodySection/bodySection.js"
import SkillIcon from "../components/skillIcon/skillIcon.js"

function AboutPage({...props}) {
    return(
      <Layout title="About">
        <BodySection
          sectionHdr="Hello!">
          <p>
            I'm Caitlin, a front-end developer based out of Toronto with a background in graphic design and motion graphics.
            <br/><br/>
            When not at work, you will find me working on a new craft project, listening to a true crime podcast, or walking my hound dogs through High Park.
          </p>
        </BodySection>

        {/* SKILLS */}

        <BodySection sectionStyle="dark">
          <Tablist tabsArr={[`Technical Skills`, `Development Tools`, `Currently Learning`]}>
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
              <SkillIcon iconSrc="imgs/netlifyLogo.svg" iconAlt="Netlify Logo" skillTxt="Netlify"/>
              <SkillIcon iconSrc="imgs/npmLogo.svg" iconAlt="NPM Logo" skillTxt="NPM"/>
              <SkillIcon iconSrc="imgs/sassLogo.svg" iconAlt="Sass Logo" skillTxt="Sass"/>
              <SkillIcon iconSrc="imgs/sourcetreeLogo.svg" iconAlt="Sourcetree Logo" skillTxt="Sourcetree"/>
              <SkillIcon iconSrc="imgs/webpackLogo.svg" iconAlt="Webpack Logo" skillTxt="Webpack"/>
              <SkillIcon iconSrc="imgs/WordPressLogo.svg" iconAlt="Wordpress Logo" skillTxt="Wordpress"/>
            </SkillsGroup>

            <SkillsGroup groupName="Currently Learning">
              <SkillIcon iconSrc="imgs/d3jsLogo.svg" iconAlt="D3JS Logo" skillTxt="D3JS" dimmed/>
              <SkillIcon iconSrc="imgs/jestLogo.svg" iconAlt="JestJS Logo" skillTxt="Jest JS" dimmed/>
              <SkillIcon iconSrc="imgs/mongodb.svg" iconAlt="MongoDB Logo" skillTxt="Mongo DB" dimmed/>
              <SkillIcon iconSrc="imgs/vueLogo.svg" iconAlt="Vue JS Logo" skillTxt="Vue JS" dimmed/>
            </SkillsGroup>

          </Tablist>
        </BodySection>
      </Layout>
    )
}

export default AboutPage;