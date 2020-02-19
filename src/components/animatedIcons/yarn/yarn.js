import React from "react"
import componentStyles from "./yarn.module.scss"

const Yarn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450">
        <g id="yarnBack" className={componentStyles.redFill} style={{transform: `translate(5%, 5%)`}}>
            <path className={componentStyles.outline} d="M230.23,338.45c103.1-5,142.06,2.7,88.45,5.32s-25.58,12.28,39,7.74"/><circle className={componentStyles.whiteFill} cx="185.21" cy="228" r="128.06"/><path d="M185.21,101.93a126.07,126.07,0,1,1-89.14,36.93,125.25,125.25,0,0,1,89.14-36.93m0-4A130.07,130.07,0,1,0,315.27,228,130.06,130.06,0,0,0,185.21,97.93Z"/><path className={componentStyles.outline} d="M163.44,102.3c-24.74,85,8.66,191.23,102.52,224.12"/><path className={componentStyles.outline} d="M127.79,113.86c-24.84,87.86,9.39,196.67,105,231.87"/><path className={componentStyles.outline} d="M102.05,131.19c-28.46,90.25-2.3,185.68,99.78,223.13"/><path className={componentStyles.outline} d="M72.37,169.57C59.72,243.43,85,315.87,159.81,352.67"/><path className={componentStyles.outline} d="M160.22,115c70.94-3.83,135.53,41.48,149.73,138.73"/><path className={componentStyles.outline} d="M156.51,138.56c66.7,3.07,130.07,53.74,139.86,152"/><path className={componentStyles.outline} d="M155.56,165.09C216.68,175.78,270.38,227.28,276.29,317"/><path className={componentStyles.outline} d="M160.76,203.06c43,17.12,78.6,56.54,90.12,117.22"/>
        </g>
        <g id="needleOne" className={`${componentStyles.needleOne} ${componentStyles.redFill}`}>
            <polygon points="121.7 345.07 104.72 362.05 109.55 338.53 252.94 72.24 265.09 78.78 121.7 345.07"/><circle cx="259.02" cy="75.51" r="18.4"/>
        </g>
        <g id="needleTwo" className={`${componentStyles.needleTwo} ${componentStyles.redFill}`}>
            <polygon points="178.24 351.44 169.54 373.82 164.49 350.35 188.5 48.85 202.26 49.95 178.24 351.44"/><circle cx="195.38" cy="49.4" r="18.4"/>
        </g>
        <g id="yarnFront" className={componentStyles.redFill} style={{transform: `translate(5%, 5%)`}}>
            <path className={componentStyles.whiteFill} d="M97.11,314.07c-2.29,0-4.59-.05-6.85-.14A128.62,128.62,0,0,1,62.49,264.7C106.74,258,150.87,240.83,187,216.26c37.39-25.43,63.6-56.51,76-90a129.09,129.09,0,0,1,36.82,44.51c-9.42,35.82-37.3,72.18-76.61,99.85s-85.2,43.47-126,43.47Z"/><path d="M263.86,129.49A127,127,0,0,1,297.66,171c-9.49,35.14-37,70.78-75.64,98-38.93,27.4-84.45,43.11-124.91,43.11-2,0-4,0-5.92-.11a126.7,126.7,0,0,1-26.11-45.64c43.77-7,87.29-24.09,123-48.4a235.69,235.69,0,0,0,47.82-42.51c12.33-14.64,21.71-30.06,27.93-45.92M262,123c-24.48,70.57-111.19,127-202.06,140a129.92,129.92,0,0,0,29.41,52.83c2.57.13,5.17.19,7.77.19,85.92,0,185-68.39,204.8-145.54A130.68,130.68,0,0,0,262,123Z"/><path className={componentStyles.outline} d="M277.42,138.54C242.76,230,160.43,273.41,69.26,284.19"/><path className={componentStyles.outline} d="M289.81,155.05c-34.66,91.44-117,134.88-208.16,145.66"/>
        </g>
    </svg>
)

export default Yarn