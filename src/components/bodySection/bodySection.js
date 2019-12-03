import React from "react"
import componentStyles from "./bodySection.module.scss"

export default props => {

  const classes = (props.sectionStyle==="dark") ? `${componentStyles.row} ${componentStyles.dark}` : `${componentStyles.row} ${componentStyles.white}`

  return(
    <section
    id={"section-" + props.sectionID}
    className={classes}
    >
      {props.sectionHdr &&
        <h2>{props.sectionHdr}</h2>
      }
      {props.children}
    </section>
  )
  
}
