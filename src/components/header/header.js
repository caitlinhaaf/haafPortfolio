import React from "react"

import componentStyles from "./header.module.scss"

export default props => (
  <header className={componentStyles.container}>
    <div className={componentStyles.bg}></div>

    <section className={componentStyles.content}>
      <h1>Caitlin Haaf</h1>
      <h3>Front End Developer</h3>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </section>
    
  </header>
)
