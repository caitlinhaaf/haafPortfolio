import React from "react"
import { Helmet } from "react-helmet"

import SkillsGroup from "../layouts/skillsGroup/skillsGroup.js"

import AboutHeader from "../components/aboutHeader/aboutHeader.js"
import Header from "../components/header/header.js"
import Nav from "../components/nav/nav.js"
import BodySection from "../components/bodySection/bodySection.js"
import Btn from "../components/button/button.js"
import CircleIcon from "../components/circleIcon/circleIcon.js"
import JobListing from "../components/jobListing/jobListing.js"
import SkillIcon from "../components/skillIcon/skillIcon.js"
import Footer from "../components/footer/footer.js"

export default () => (
  <body>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Caitlin Haaf | Front-End Developer & Designer</title>
      <meta name="title" content="Caitlin Haaf | Front-End Developer & Designer"/>
      <meta name="description" content="I'm a front-end developer based out of Toronto with a background in design looking for a position where I can continue my work with design systems, create engaging user experiences, and feel like an integral part of a team."/>

      <meta name="robots" content="index, follow"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://metatags.io/"/>
      <meta property="og:title" content="Caitlin Haaf | Front-End Developer & Designer"/>
      <meta property="og:description" content="I'm a front-end developer based out of Toronto with a background in design looking for a position where I can continue my work with design systems, create engaging user experiences, and feel like an integral part of a team."/>
      <meta property="og:image" content="imgs/meta/metaPreviewImg.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://metatags.io/"/>
      <meta property="twitter:title" content="Caitlin Haaf | Front-End Developer & Designer"/>
      <meta property="twitter:description" content="I'm a front-end developer based out of Toronto with a background in design looking for a position where I can continue my work with design systems, create engaging user experiences, and feel like an integral part of a team."/>
      <meta property="twitter:image" content="imgs/meta/metaPreviewImg.jpg"/>
    </Helmet>

    <Nav/>

    <Header/>

    <section className="body">

      {/* ABOUT */}
      <BodySection
        sectionID="about"
        sectionHdr="About Me">

        <section className="about--grid">
          <section>
            <AboutHeader header="Education">
              <CircleIcon
                iconSrc="./imgs/gradcap.svg"
                iconAlt="Graduation cap"/>
            </AboutHeader>

            <JobListing
              title="Interactive Media Management"
              location="Sheridan College"
              date="2015-2016"/>

            <JobListing
              title="Bahelor Applied Arts - Illustration"
              location="Sheridan College"
              date="2008-2012"/>

          </section>

          <section>
            <AboutHeader header="Work History">
              <CircleIcon
                iconSrc="./imgs/briefcase.svg"
                iconAlt="Briefcase"/>
              </AboutHeader>

              <JobListing
                title="Software Developer I"
                location="FlightSafety International"
                date="April 2016 - present"/>

              <JobListing
                title="Peer Tutor"
                location="Sheridan College"
                date="November 2015 - April 2016"/>

              <JobListing
                title="Courseware Developer &amp; Designer"
                location="FlightSafety International"
                date="May 2012 - August 2016"/>
          </section>
        </section>

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


          <SkillsGroup groupName="Design Programs">
            <SkillIcon iconSrc="imgs/afterEffectsLogo.svg" iconAlt="Adobe AfterEffects Logo" skillTxt="AfterEffects"/>
            <SkillIcon iconSrc="imgs/illustratorLogo.svg" iconAlt="Adobe Illustrator Logo" skillTxt="Illustrator"/>
            <SkillIcon iconSrc="imgs/invision-seeklogo.com.svg" iconAlt="Invision Logo" skillTxt="Invision"/>
            <SkillIcon iconSrc="imgs/photoshopLogo.svg" iconAlt="Adobe Photoshop Logo" skillTxt="Photoshop"/>
            <SkillIcon iconSrc="imgs/premiereLogo.svg" iconAlt="Adobe Premiere Logo" skillTxt="Premiere"/>
            <SkillIcon iconSrc="imgs/xdLogo.svg" iconAlt="Adobe Xd Logo" skillTxt="Xd"/>
          </SkillsGroup>

          <SkillsGroup groupName="Currently Learning">
            <SkillIcon iconSrc="imgs/d3jsLogo.svg" iconAlt="D3JS Logo" skillTxt="D3JS" dimmed/>
            <SkillIcon iconSrc="imgs/jestLogo.svg" iconAlt="JestJS Logo" skillTxt="Jest JS" dimmed/>
            <SkillIcon iconSrc="imgs/mongodb.svg" iconAlt="MongoDB Logo" skillTxt="Mongo DB" dimmed/>
            <SkillIcon iconSrc="imgs/reduxLogo.svg" iconAlt="Redux Logo" skillTxt="Redux" dimmed/>
            <SkillIcon iconSrc="imgs/vueLogo.svg" iconAlt="Vue JS Logo" skillTxt="Vue JS" dimmed/>
          </SkillsGroup>

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

      <Footer/>


    </section>
  </body>
)
