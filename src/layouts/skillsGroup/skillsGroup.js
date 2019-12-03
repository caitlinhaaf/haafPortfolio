import React from "react"

import moduleStyles from "./skillsGroup.module.scss"

export default props => (

  <section className={moduleStyles.grouping}>
    <h3>{props.groupName}</h3>

    <section className={moduleStyles.grid}>
      {props.children}
    </section>

  </section>
)
