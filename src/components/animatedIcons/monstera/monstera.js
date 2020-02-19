import React from "react"
import componentStyles from "./monstera.module.scss"

const Monstera = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <g id="monsteraPot" className={componentStyles.redFill}>
            <path d="M208.79,311.28c-24.52,0-45.75-2.13-56.2-5.25l14.49,67.28c0,5.9,18.68,10.69,41.71,10.69s41.7-4.79,41.7-10.69L265,306C254.54,309.15,233.3,311.28,208.79,311.28Z"/><path d="M208.79,277.07c-34.85,0-63.09,4.3-63.09,9.62v10.69c0,5.32,28.24,9.63,63.09,9.63s63.09-4.31,63.09-9.63V286.69C271.88,281.37,243.63,277.07,208.79,277.07Zm0,16c-31.3,0-56.68-2.88-56.68-6.42s25.38-6.42,56.68-6.42,56.67,2.88,56.67,6.42S240.09,293.11,208.79,293.11Z"/><path d="M206.65,218.25c1.07,12.83,6.42,24.6,4.28,41.71s-12.83,23.52-9.63,37.42h9.63s7.48-25.66,7.48-37.42S215.2,216.11,215.2,215,206.65,218.25,206.65,218.25Z"/>
        </g>
        <g id="backLeaf" className={`${componentStyles.redFill} ${componentStyles.backLeaf}`}>
            <path d="M311.26,85.65c4.5,2.14,6.74,11.77,6.74,11.77s4.5-22.46,0-38.5c-.14-.52-.29-1.05-.43-1.59-1.34-1.49-5.85-5.52-14.17-3.76-10.12,2.14-11.24-2.14-11.24-3.21,0-2.13,13.17-8.36,25.4,7-4.37-16.42-9.57-45.37-40-43.3-28.07,1.91-25.72,27.64-24.89,33.16a123.35,123.35,0,0,1,39.5,67.36S273.32,69,252.84,48.23v.07c0,.05,0,0,0,0v-.07s-29.22-20.32-55.06,4.27S187,97.9,192.41,104.08h0a94.64,94.64,0,0,1,14.68-9c3.23-10.07,9-24.76,14.29-21.17,4.46,3,1.68,10.21-1.56,15.85,23.91-8.07,51.63-6.43,60,28a74.2,74.2,0,0,1,2.08,22l12.53,14.31s4-9.31,7.86-17.11c9-18.18-3.44-18.54,0-26.73,2.25-5.35,6.74,13.9,5.62,20.32,0,0,10.11-20.32,10.11-27.81-7.86-12.83-12.36-5.34-15.73-9.62C298.34,88.15,306.77,83.51,311.26,85.65Z"/>
        </g>
        <g id="frontLeaf" className={`${componentStyles.redFill} ${componentStyles.frontLeaf}`}>
            <path d="M276.16,122c-12.79-55.43-73.4-25.85-89.67-7.66C175.87,131,147.27,179.05,131.8,237.5c9.69-62.06,37.14-104.46,53.46-125.11-3.18-6.19-27.6-50.4-69.5-37.43-44.92,13.9-37.43,48.12-37.43,48.12s34.22-28.87,53.47-15c11.1,8-54.54-3.21-57.75,31-3.21,20.32,4.28,22.46,4.28,22.46S118,130.5,126.45,138.05c9.62,8.56-52.4,13.9-47,31s8.55,25.67,15,26.74c0,0,11.76-12.84,25.66-9.63,3.3.76-9,8.78-12.83,10.69-4.28,2.14-11.76,1.07-11.76,1.07s4.28,16,8.55,27.81c5.48,15.07,22.46,34.22,22.46,34.22s9.62-8.56,25.66-10.7,18.18-2.14,23.53-6.41c0,0,5.31-9.1,2.14-18.18-5.3-15.13-18-34.29,0-41.71,18.18-7.48,19.25,41.71,4.28,57.75,0,0,44.57-13.35,50.25-26.74,15-35.28-31-64.16-21.38-71.64s39.56,10.69,27.8,65.23C238.73,207.56,289,177.62,276.16,122Z"/><path style={{fill: `none`}} d="M250.51,52.57Z"/><path style={{fill: `none`}} d="M220.55,78.17c-5-3.59-10.52,11.1-13.6,21.17A93,93,0,0,1,219.07,94C222.15,88.38,224.8,81.2,220.55,78.17Z"/><path d="M250.49,52.5l0,.07Z"/>
        </g>
    </svg>
)

export default Monstera