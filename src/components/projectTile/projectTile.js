import React from "react"
import { Link } from "gatsby"

import componentStyles from "./projectTile.module.scss"

export default ({title, date, description, slug, ...props}) => (
    <div className={componentStyles.tile}>
        <h2>{title}</h2>
        <span className={componentStyles.date}>{date}</span>
        <p dangerouslySetInnerHTML={{__html: description,}}></p>
        <Link className={componentStyles.link} to={slug}>
            Read More
        </Link>
    </div>
)
