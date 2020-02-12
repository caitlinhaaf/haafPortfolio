import React, {useState} from "react"

import componentStyles from "./slideshow.module.scss"

const ProjectSlideshow = ({slideshowArr, children, ...props}) => {
    const [index, setIndex] = useState(0)
    const length = slideshowArr.length - 1
    const handleNext = () => index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () => index === 0 ? setIndex(length) : setIndex(index - 1)

    return(
        <section className={componentStyles.slideshowContainer}>
            <button 
                onClick={() => handlePrevious()}
                className={componentStyles.button}>&lt;
            </button>
            {children}
            <button 
                onClick={() => handleNext()}
                className={componentStyles.button}>&gt;</button>
        </section>
    )
}

export default ProjectSlideshow;