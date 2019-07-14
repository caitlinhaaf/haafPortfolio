import React from "react"
import NavBtn from "../navButton/navButton.js"

import componentStyles from "./nav.module.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line
  require("smooth-scroll")('a[href*="#"]')
}

export default () => (

  <nav className={componentStyles.main}>
    <section className={componentStyles.buttonContainer}>

      <NavBtn btnId="about"/>

      <NavBtn btnId="skills"/>

      <NavBtn btnId="contact"/>

    </section>
  </nav>

)
