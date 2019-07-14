import React from "react"

import componentStyles from "./footer.module.scss"

export default props => (
  <footer className={componentStyles.content}>
    Built with GatsbyJS. All content &copy; Caitlin Haaf {new Date().getFullYear()}
  </footer>
)
