import React from "react"
import { Link } from "gatsby"

import componentStyles from "./navButton.module.scss"

export default ({colorVariation, ...props}) => (
  <Link to={props.pageLink} className={componentStyles.pageLink} activeClassName={componentStyles.active}>
    <li className={
      colorVariation===`dark` ? `${componentStyles.link}` : `${componentStyles.link} ${componentStyles.light}`
    }>
        {props.linkTxt.toUpperCase()}
    </li>
  </Link>
)
