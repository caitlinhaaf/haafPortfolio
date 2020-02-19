import React from "react"

import Layout from "../layouts/layout"
import SkillsGroup from "../layouts/skillsGroup/skillsGroup.js"
import Tablist from "../components/tablist/tablist.js"
import BodySection from "../components/bodySection/bodySection.js"
import SkillIcon from "../components/skillIcon/skillIcon.js"

import Yarn from "../components/animatedIcons/yarn/yarn.js"
import PenNib from "../components/animatedIcons/penNib/penNib.js"
import Monstera from "../components/animatedIcons/monstera/monstera.js"

function AboutPage({...props}) {
    return(
      <Layout title="About">
        <BodySection sectionHdr="Hello!" className="flexContainer">
          <div 
          // style={{width: `60%`}}
          >
              <p>
              I'm Caitlin, a front-end developer based out of Toronto.
              <br/><br/>
              I'm an alumnus of Sheridan College <a href="http://www.sheridanillustration.com/" rel="noopener noreferrer" target="_blank">Bachelor of Illustration</a> and <a href="https://academics.sheridancollege.ca/programs/interactive-media-management" rel="noopener noreferrer" target="_blank">Interactive Media Management</a> programs, and <a href="https://bridgeschool.io/" rel="noopener noreferrer" target="_blank">Bridge School</a> Software Development (Cohort 9). 
              <br/><br/>

              <a href="https://www.canadalearningcode.ca/" rel="noopener noreferrer" target="_blank">Canada Learning Code</a>
              <a href="https://toronto.coderdojo.ca/" rel="noopener noreferrer" target="_blank">Toronto branch of CoderDojo</a>
              {/* <br/><br/>
              When I'm not in front of my computer, you will likely find me working on a new craft project, caring for my large plant collection, listening to a true crime podcast, or walking my two rescue dogs through High Park. */}
            </p>


            <h3 style={{marginTop: `1rem`}}>I'm Always Happy to Chat About...</h3>
            <div style={{display: `flex`}}>
              <div style={{width: `6rem`}}>
                <Yarn/>
                <span style={{display: `block`,textAlign: `center`}}>Crafting</span>
              </div>
              <div style={{width: `6rem`}}>
                <Monstera/>
                <span style={{display: `block`,textAlign: `center`}}>Plants</span>
              </div>
              <div style={{width: `6rem`}}>
                <PenNib/>
                <span style={{display: `block`,textAlign: `center`}}>SVG Animations</span>
              </div>
             
            </div>
            
          </div>
        </BodySection>

        {/* SKILLS */}
        <BodySection sectionStyle="dark">
          <Tablist tabsArr={[`Technical Skills`, `Design Tools`, `Development Tools`, `Currently Learning`]}>
            <SkillsGroup groupName="Technical Skills">
              <SkillIcon iconSrc="imgs/HTML5logo.svg" iconAlt="HTML 5 Logo" skillTxt="HTML"/>
              <SkillIcon iconSrc="imgs/CSS3logo.svg" iconAlt="CSS 3 Logo" skillTxt="CSS"/>
              <SkillIcon iconSrc="imgs/jsLogo.svg" iconAlt="Javascript Icon" skillTxt="Javascript"/>
              <SkillIcon iconSrc="imgs/gatsbyLogo.svg" iconAlt="GatsbyJS Logo" skillTxt="GatsbyJS"/>
              <SkillIcon iconSrc="imgs/reactIcon.svg" iconAlt="ReactJS Logo" skillTxt="ReactJS"/>
              <SkillIcon iconSrc="imgs/reduxLogo.svg" iconAlt="Redux Logo" skillTxt="Redux"/>
              <SkillIcon iconSrc="imgs/nodeLogo.svg" iconAlt="NodeJS Logo" skillTxt="NodeJS"/>
            </SkillsGroup>

            <SkillsGroup groupName="Design Tools">
              <SkillIcon iconSrc="imgs/afterEffectsLogo.svg" iconAlt="Adobe After Effects Logo" skillTxt="After Effects"/>
              <SkillIcon iconSrc="imgs/afterEffectsLogo.svg" iconAlt="Adobe After Effects Logo" skillTxt="After Effects"/>
              <SkillIcon iconSrc="imgs/illustratorLogo.svg" iconAlt="Adobe Illustrator Logo" skillTxt="Illustrator"/>
              <SkillIcon iconSrc="imgs/invision-seeklogo.com.svg" iconAlt="Invision Logo" skillTxt="Invision"/>
              <SkillIcon iconSrc="imgs/photoshopLogo.svg" iconAlt="Adobe Photoshop Logo" skillTxt="Photoshop"/>
              <SkillIcon iconSrc="imgs/premiereLogo.svg" iconAlt="Adobe Premier Logo" skillTxt="Premiere"/>
              <SkillIcon iconSrc="imgs/xdLogo.svg" iconAlt="Adobe Experience Designer Logo" skillTxt="Xd"/>
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