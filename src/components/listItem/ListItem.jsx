import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const detailsUrl = "https://api.themoviedb.org/3/movie/";
const API_KEY = "0d0f41899d83bb4005049a85998cf8ce";
const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

const ListItem = ({ index, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromTMDB = await getData();
        setMovie(dataFromTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`${detailsUrl}${id}?api_key=${API_KEY}`);
    return res;
  };

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {movie && <img src={`${imgBaseUrl}${movie.poster_path}`} alt="" />}
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" className="link">
                <PlayArrow className="icon" />
              </Link>

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="orignalTitle">
              {movie.original_title
                ? movie.original_title
                : movie.original_name}
            </div>
            <div className="itemInfoTop">
              <span>{movie.runtime} mins</span>
              <span className="limit">16+</span>
              <span>
                {movie.release_date
                  ? movie.release_date.substr(0, 4)
                  : movie.first_air_date.substr(0, 4)}
              </span>
            </div>
            <div className="desc">
              {movie.overview ? movie.overview.substr(0, 140) + "..." : ""}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ListItem;
