import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";
import featuredMovie from "./seed";

const movie = featuredMovie[Math.floor(Math.random() * 10)];

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={movie.backdrop} alt="" />
      <div className="info">
        <img src={movie.logo} alt="" />
        <span className="desc">{movie.desc}</span>
        <div className="buttons">
          <Link to="/watch" className="link">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
