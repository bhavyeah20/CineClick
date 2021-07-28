import ListItem from "../listItem/ListItem"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import { useRef, useState } from "react"
import axios from "axios"
import { useEffect } from "react"
const List = ({fetchUrl, listTitle}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [tmdbData, setTmdbData] = useState(null);
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
            if(slideNumber-1 == 0)
                setIsMoved(false);            
        }

        if(direction === "right" && slideNumber < 4){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
            setIsMoved(true);
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const dataFromTMDB = await getData();
                setTmdbData(dataFromTMDB.data);
            }catch(err){
                console.log(err);
            }
        }
    
        fetchData();

      }, [])

      const getData = async () => {
          const res = await axios.get(fetchUrl);
          return res;
      }

    

    return (
        <div className="list">
            <span className="listTitle">{listTitle}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}
                    style = {{display : !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    {tmdbData && (
                    <>
                    <ListItem index = {0} id={tmdbData.results[0].id}/>
                    <ListItem index = {1} id={tmdbData.results[1].id}/>
                    <ListItem index = {2} id={tmdbData.results[2].id}/>
                    <ListItem index = {3} id={tmdbData.results[3].id}/>
                    <ListItem index = {4} id={tmdbData.results[4].id}/>
                    <ListItem index = {5} id={tmdbData.results[5].id}/>
                    <ListItem index = {6} id={tmdbData.results[6].id}/>
                    <ListItem index = {7} id={tmdbData.results[7].id}/>
                    <ListItem index = {8} id={tmdbData.results[8].id}/>
                    <ListItem index = {9} id={tmdbData.results[9].id}/>
                    </>
                    )}

                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
            
        </div>
    )
}

export default List
