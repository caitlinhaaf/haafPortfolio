import React from "react"
import sectionStyles from "./bodySection.module.scss"

export default props => (
  <section
    id={"section-" + props.sectionID}

    className={
      (props.sectionStyle==="dark") ? sectionStyles.dark : sectionStyles.white }
    >

    {props.sectionHdr &&
      <h2>{props.sectionHdr}</h2>
    }

    {props.children}
  </section>
)
