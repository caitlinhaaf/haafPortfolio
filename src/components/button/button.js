import React from "react"

import componentStyles from "./button.module.scss"

export default ({buttonStyle,buttonIcon,iconAlt,buttonTxt,...props}) => (
  <button
    type="submit"
    className={
      (buttonStyle==="light") ? componentStyles.light :
      componentStyles.dark
    }>
    {buttonIcon &&
      <img src={buttonIcon} alt={iconAlt}/>
    }
    <span>{buttonTxt}</span>
  </button>
)
