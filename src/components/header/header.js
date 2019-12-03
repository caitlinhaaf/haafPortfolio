import React from "react"

import componentStyles from "./header.module.scss"

export default props => (
  <header className={componentStyles.container}>
    <div className={componentStyles.bg}></div>

    <section className={componentStyles.content}>
      <h1>Caitlin Haaf</h1>
      <hr/>
      <h2>Front End Developer</h2>
    </section>
    
  </header>
)
