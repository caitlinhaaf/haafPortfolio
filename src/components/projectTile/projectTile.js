import React from "react"
import { Link } from "gatsby"

import componentStyles from "./projectTile.module.scss"

export default ({title,date,description,slug,...props}) => (
    <div className={componentStyles.tile}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{__html: description,}}></p>
        <Link to={slug}>
            Read More
        </Link>
    </div>
)
