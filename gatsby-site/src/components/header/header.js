import React from "react"

import componentStyles from "./header.module.scss"

export default props => (
  <header className={componentStyles.container}>
    <div className={componentStyles.bg}></div>

    <section className={componentStyles.content}>
      <h1>Caitlin Haaf</h1>
      <h2>Front End Developer</h2>

      <hr/>

      <p>
        I'm a front-end developer based out of Toronto with a background in design looking for a position where I can continue my work with design systems, create engaging user experiences, and feel like an integral part of a team.
        <br/><br/>
        When not at work, you will find me working on a new craft project, listening to a true crime podcast, or walking my hound dogs through High Park.
      </p>

    </section>
  </header>
)
