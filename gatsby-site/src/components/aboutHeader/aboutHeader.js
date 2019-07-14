import React from "react"

import componentStyles from "./aboutHeader.module.scss"

export default props => (
  <div className={componentStyles.header}>
    {props.children}
    <h3>{props.header}</h3>
  </div>
)
