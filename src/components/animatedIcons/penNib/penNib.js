import React from "react"
import componentStyles from "./penNib.module.scss"

const PenNib = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450">
        <g id="penNib" className={`${componentStyles.nib} ${componentStyles.redFill}`}>
            <rect x="281.94" y="335.07" width="71.88" height="23.64" transform="translate(-140.37 240.14) rotate(-34.39)"/><path d="M194.05,161.58l74.59,109a8.36,8.36,0,1,1-5.34,4l-74.61-109L219,328l60.64,25,57.76-39.53L334.53,249Z"/>
        </g>
        <g id="pointOne" className={`${componentStyles.pointOne} ${componentStyles.redFill}`}><rect x="40" y="220" width="26" height="26"/></g>
        <g id="line" className={componentStyles.line}><line className={componentStyles.outline} x1="53" y1="233" x2="239" y2="47"/></g>
        <g id="pointTwo"  className={`${componentStyles.pointTwo} ${componentStyles.redFill}`}><rect x="226" y="34" width="26" height="26"/>
        </g>
    </svg>
)

export default PenNib