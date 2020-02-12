import React from "react"

import componentStyles from "./footer.module.scss"

export default ({colorVariation, ...props}) => (
  <footer className={
    colorVariation===`dark` ? `${componentStyles.content}` : `${componentStyles.content} ${componentStyles.light}`
    }>
    Built with GatsbyJS. &copy; Caitlin Haaf {new Date().getFullYear()}
  </footer>
)
