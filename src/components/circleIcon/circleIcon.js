import React from "react"

import componentStyles from "./circleIcon.module.scss"

export default props => (
  <div className={componentStyles.background}>
    <img src={props.iconSrc} alt={props.iconAlt} />
  </div>
)
