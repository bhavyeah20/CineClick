import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./listItem.scss"

const imgBaseUrl = "https://image.tmdb.org/t/p/original";
 

const ListItem = ({index, tmdbData}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    
    return (
        <div className="listItem" 
        style = {{left: isHovered && index*225 -50 + index*2.5}}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            {tmdbData && (<img src={`${imgBaseUrl}${tmdbData.results[index].poster_path}`} alt="" />)}
            {isHovered && (
            <>
                <video src={trailer} autoPlay={true} loop></video>           
                <div className="itemInfo">
                    <div className="icons">
                        <Link to="/watch" className="link">
                        <PlayArrow className="icon"/>
                        </Link>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="orignalTitle">
                        {tmdbData.results[index].original_title ? tmdbData.results[index].original_title : tmdbData.results[index].original_name}
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className="limit">16+</span>
                        <span>{tmdbData.results[index].release_date ? tmdbData.results[index].release_date.substr(0,4) : tmdbData.results[index].first_air_date.substr(0,4) }</span>
                    </div>
                    <div className="desc">
                        {tmdbData.results[index].overview ? tmdbData.results[index].overview.substr(0,140)+"..." : ""}
                    </div>
                   
                </div>
            </>
            )}
        </div>
    )

}    
export default ListItem
