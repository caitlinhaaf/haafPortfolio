import React from "react"
import { Link } from "gatsby"

import componentStyles from "./navButton.module.scss"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default props => (
  <Link to={"/#section-" + props.btnId}>
    <li className={componentStyles.link}>
        {props.btnId.toUpperCase()}
    </li>
  </Link>

)
