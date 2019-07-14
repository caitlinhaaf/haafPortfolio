import React from "react"

import componentStyles from "./skillIcon.module.scss"

export default props => (
  <div className={
    props.dimmed ? componentStyles.iconDimmed : componentStyles.icon
  }>
    <img
      className={componentStyles.img}
      src={props.iconSrc}
      alt={props.iconAlt}
      />
    <p>{props.skillTxt}</p>
  </div>
)
