import React from "react"

import componentStyles from "./jobListing.module.scss"

export default props => (
  <div className={componentStyles.container}>
    <h4>{props.title}</h4>
    <span>{props.location} </span>
    <span className={componentStyles.date}>{props.date}</span>
  </div>
)
