import React, {useState} from "react"

import ProjectTile from "../projectTile/projectTile"

import componentStyles from "./projectSlideshow.module.scss"

const ProjectSlideshow = ({slideshowArr, ...props}) => {
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
            <ProjectTile 
                    key={slideshowArr[index].node.fields.slug}
                    date={slideshowArr[index].node.frontmatter.date}
                    title={slideshowArr[index].node.frontmatter.title}
                    description={slideshowArr[index].node.excerpt}
                    slug={slideshowArr[index].node.fields.slug}/>
            <button 
                onClick={() => handleNext()}
                className={componentStyles.button}>&gt;</button>
        </section>
    )
}

export default ProjectSlideshow;