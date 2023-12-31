import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { categoryIcons } from "./library"

export default function WorkCard(props) {
    const sliceImages = (set) => {
        if(set.length < 4)
        {
            return set.slice(1, set.length)
        }
        else
        {
            return set.slice(1, 4)
        }
    }

    return(
            <div className="work-card w-100 d-flex align-items-start justify-content-start flex-column" style={{ rowGap: "0.35em" }}>
                <div 
                    className="w-100" 
                    style={{
                        height: "300px",
                        overflow: "hidden",
                        textAlign: "center",
                    }}
                >
                    <div className="w-100 h-100 d-flex align-items-center justify-content-start flex-column" style={{rowGap: "3px"}}>
                        <div className={
                            "w-100 h-75" + 
                            (props.work.screens[0].img.substring(props.work.screens[0].img.length-2, props.work.screens[0].img.length) === "ng"?
                                " bg-black-50 soft-edge-curve p-2"
                            :
                                ""
                            )
                        }>
                            <Link className="text-decoration-none flex-grow-1" to={"/view-work/" + props.work.id}>
                                <img src={props.work.screens[0].img} alt={""} className="w-100 h-100 object-fit-cover"/>
                            </Link>
                        </div>
                        <div id="image-frame-slideshow"  className="w-100 h-25">
                            <div className="w-100 h-100 row">
                                {sliceImages(props.work.screens).map((screen) => {
                                    return(
                                        <div className="col-4" key={screen.img}>
                                            <div className={
                                                "w-100 h-100 border-adapt-3" + 
                                                (screen.img.substring(screen.img.length-2, screen.img.length) === "ng"?
                                                    " bg-black-25 p-2"
                                                :
                                                    ""
                                                )
                                            }>
                                                <img src={screen.img} alt={""} className="w-100 h-100 object-fit-cover" style={{objectPosition: "center center"}}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 h-100 d-flex align-items-center justify-content-between">
                    <h4 className="primary-text"><strong>{props.work.title}</strong></h4>
                    {props.isCategoryVisible &&
                        <h6 style={{opacity: 0.6}}><FontAwesomeIcon icon={categoryIcons[props.work.category]}/></h6>
                    }            
                </div>
                <div className="w-100 h-100 row">
                    <div className="col-8 p-0">
                        <Link className="flex-grow-1 text-decoration-none" to="/listbytype" onMouseEnter={()=>{localStorage.setItem('selectedSubtitle', props.work.subtitle)}}>
                            <h6 className="subtitle">{props.work.subtitle}</h6>
                        </Link>
                    </div>
                    <div className="col-4 p-0 text-end">
                        {props.work.years.map((year, index)=>{
                            return(
                                <span key={year}>
                                    <Link className="flex-grow-1 text-decoration-none" to="/listbyyear"  onMouseEnter={()=>{localStorage.setItem('selectedYear', year)}}>
                                        {year}
                                    </Link>
                                    {index !== props.work.years.length - 1?
                                        <span>, </span>
                                    :
                                        <span></span>
                                    }
                                </span>
                            )
                        })}
                    </div>
                </div>
                <p className="w-100 pt-3">
                    {props.work.description}
                </p>
            </div>
    )
}