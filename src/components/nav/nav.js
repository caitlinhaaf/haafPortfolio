import React from "react"
import NavBtn from "../navButton/navButton.js"

import componentStyles from "./nav.module.scss"

export default ({colorVariation, ...props}) => {
  const colorMode = colorVariation===`dark` ? `dark` : `light`;

  const toggleMenu = () => {
    if(document.querySelector("#navLinks").classList.contains(componentStyles.linksVisible)){
      document.querySelector("#navLinks").classList.remove(componentStyles.linksVisible)
      document.querySelector("#hamburger").classList.remove(componentStyles.open)
    }else{ 
      document.querySelector("#navLinks").classList.add(componentStyles.linksVisible)
      document.querySelector("#hamburger").classList.add(componentStyles.open)
    }
  }

  return(
    <nav className={
      colorMode===`dark` ? `${componentStyles.main}` : `${componentStyles.main} ${componentStyles.light}`
      }>
      
      <button 
        id="hamburger"
        onClick={toggleMenu} 
        className={`${componentStyles.hamburger} ${componentStyles[colorMode]}`}
        aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <section id="navLinks" className={componentStyles.buttonContainer}>
        <NavBtn colorVariation={colorMode} linkTxt="home" pageLink="/"/>
        <NavBtn colorVariation={colorMode} linkTxt="about" pageLink="/about"/>
        <NavBtn colorVariation={colorMode} linkTxt="projects" pageLink="/projects"/>
        <NavBtn colorVariation={colorMode} linkTxt="contact" pageLink="/contact"/>
      </section>
    </nav>
  )
}
