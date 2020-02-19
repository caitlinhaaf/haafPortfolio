import React from "react"
import { Link } from "gatsby"

import componentStyles from "./projectTile.module.scss"

export default ({title, date, description, slug, ...props}) => (
    <div className={componentStyles.tile}>
        <Link to={slug} style={{marginBottom: `.75rem`}}>
            <span className={componentStyles.header}>{title}</span>
        </Link>
        <span className={componentStyles.date}>{date}</span>
        <p dangerouslySetInnerHTML={{__html: description,}}></p>
    </div>
)
