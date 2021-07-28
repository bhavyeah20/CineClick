import ListItem from "../listItem/ListItem";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const List = ({ fetchUrl, listTitle }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [tmdbData, setTmdbData] = useState([]);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      if (slideNumber - 1 == 0) setIsMoved(false);
    }

    if (direction === "right" && slideNumber < 14) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setIsMoved(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromTMDB = await getData();
        setTmdbData(dataFromTMDB);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const res = await axios.get(fetchUrl);
    return res.data.results;
  };

  return (
    <div className="list">
      <span className="listTitle">{listTitle}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {tmdbData &&
            tmdbData.map((tmdb, i) => <ListItem index={i} id={tmdb.id} />)}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
