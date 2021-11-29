import React, { useEffect, useState } from "react";
import "./Slider.css";
import { BsPlayFill } from "react-icons/bs";
import requests from "./Requests";
const rand = Math.floor(Math.random() * 10);
function Slider() {
  const [movie, setMovie] = useState([]);
  const [back_img, setBackImg] = useState("");

  console.log(rand);
  console.log(back_img);
  const backgrod =
    "https://image.tmdb.org/t/p/original/5NYdSAnDVIXePrSG2dznHdiibMk.jpg";

  // const fetchNetflixOriginals =
  //   "https://api.themoviedb.org/3/discover/tv?api_key=a3c1a584d8679e42019c3e8b71d1d539&with_networks=213";
  useEffect(() => {
    fetch(requests.fetchNetflixOriginals)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        setBackImg(
          "https://image.tmdb.org/t/p/original" +
            data.results[rand].backdrop_path
        );
      });
  }, []);

  console.log(movie[rand], "hello");
  return (
    <div>
      <header
        className="banner_header"
        style={{
          backgroundImage: `url(${back_img})`,
          backgroundPosition: "center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_name">
            {movie.length > 0 && movie[rand].name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_but">
              <div className="banner_button_icon">
                <BsPlayFill />
              </div>
              Play
            </button>
            <button className="banner_but">More info</button>
          </div>
          <div className="banner_des">
            {movie.length > 0 && movie[rand].overview}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Slider;
