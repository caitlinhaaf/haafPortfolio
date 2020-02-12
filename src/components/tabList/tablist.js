import React, {useState} from "react"

import componentStyles from "./tablist.module.scss"

const Tablist = ({tabsArr, children, ...props}) => {
    const [activeIndex, setActiveTab] = useState(0)
    const setActive = (key) => setActiveTab(key)
    return(
        <>
            <div className={componentStyles.tabContainer}>
                {tabsArr.map((tab, i)=>(
                    <button 
                        key={i} 
                        className={i===activeIndex ?
                            `${componentStyles.tab} ${componentStyles.active}`
                            :
                            componentStyles.tab
                        }
                        onClick={() => setActive(i)}>
                        {tab}
                    </button>
                ))
                }
            </div>

            <div className={componentStyles.tabContent}>
                {children[activeIndex]}
            </div>
        </>
    )
}
export default Tablist;