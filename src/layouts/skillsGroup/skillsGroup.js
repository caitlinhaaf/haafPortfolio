import React from "react"

import moduleStyles from "./skillsGroup.module.scss"

export default props => (
  <section className={moduleStyles.grouping}>
    <section className={moduleStyles.grid}>
      {props.children}
    </section>
  </section>
)
