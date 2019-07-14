import React from "react"

import componentStyles from "./button.module.scss"

export default props => (
  <button
    type="submit"
    className={
      (props.buttonStyle==="light") ? componentStyles.light :
      componentStyles.dark
    }>
    {props.buttonIcon &&
      <img src={props.buttonIcon} alt={props.iconAlt}/>
    }
    <span>{props.buttonTxt}</span>
  </button>
)
