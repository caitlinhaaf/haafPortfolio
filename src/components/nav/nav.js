import React from "react"
import NavBtn from "../navButton/navButton.js"

import componentStyles from "./nav.module.scss"

export default ({colorVariation, ...props}) => {
  const colorMode = colorVariation===`dark` ? `dark` : `light`;
  return(
    <nav className={
      colorMode===`dark` ? `${componentStyles.main}` : `${componentStyles.main} ${componentStyles.light}`
      }>
      <section className={componentStyles.buttonContainer}>

        <NavBtn colorVariation={colorMode} linkTxt="home" pageLink="/"/>

        <NavBtn colorVariation={colorMode} linkTxt="about" pageLink="/about"/>

        <NavBtn colorVariation={colorMode} linkTxt="projects" pageLink="/projects"/>

        <NavBtn colorVariation={colorMode} linkTxt="contact" pageLink="/contact"/>
      </section>
    </nav>
  )

}
