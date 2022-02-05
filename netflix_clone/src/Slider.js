import React, { useEffect, useState } from "react";
import "./Slider.css";
import { BsPlayFill } from "react-icons/bs";
import requests from "./Requests";
import RowSlider from "./RowSlider";
const rand = Math.floor(Math.random() * 10);

function Slider() {
  const [movie, setMovie] = useState([]);
  const [trending, setTrending] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [docu, setDocu] = useState([]);
  const [horroMovies, setHorrorMovie] = useState([]);
  const [romanceMovies, setRomanceMovie] = useState([]);
  const [back_img, setBackImg] = useState("");
  const [back_img1, setBackImg1] = useState("");
  const [ban_name, setBanName] = useState("");
  const [ban_dec, setBanDes] = useState("");
  const [watchlist, setToWatchlist] = useState([]);

  // console.log(rand);
  // console.log(back_img);

  // const fetchNetflixOriginals =
  //   "https://api.themoviedb.org/3/discover/tv?api_key=a3c1a584d8679e42019c3e8b71d1d539&with_networks=213";
  useEffect(() => {
    fetch(requests.fetchNetflixOriginals)
      .then((res) => res.json())
      .then(
        (data) => {
          setMovie(data.results);
          setBackImg(
            "https://image.tmdb.org/t/p/original" +
              data.results[rand].backdrop_path
          );
          setBackImg1(
            "https://image.tmdb.org/t/p/original" +
              data.results[rand].poster_path
          );
          setBanName(data.results[rand].name);
          setBanDes(data.results[rand].overview);
        },
        fetch(requests.fetchTrending)
          .then((res) => res.json())
          .then((data) => {
            setTrending(data.results);
          }),
        fetch(requests.fetchHorrorMovies)
          .then((res) => res.json())
          .then(
            (data) => {
              setHorrorMovie(data.results);
            },
            fetch(requests.fetchDocumentaries)
              .then((res) => res.json())
              .then(
                (data) => {
                  setDocu(data.results);
                },
                fetch(requests.fetchComedyMovies)
                  .then((res) => res.json())
                  .then(
                    (data) => {
                      setComedy(data.results);
                    },
                    fetch(requests.fetchRomanceMovies)
                      .then((res) => res.json())
                      .then((data) => {
                        setRomanceMovie(data.results);
                      })
                  )
              )
          )
      );
  }, []);

  const fun = () => {
    return (
      <RowSlider
        movie={watchlist}
        name="Watchlist"
        iswatchlist={true}
        addToWatchlist={setToWatchlist}
      ></RowSlider>
    );
  };
  // console.log(watchlist.length, "hello");
  const wat = watchlist.length > 0 ? fun() : <div></div>;

  return (
    <div className="home_box">
      <div className="img">
      <img className="img1" src={back_img} alt="" />
        {/* <img className="img2" src={back_img1} alt="" /> */}
        <div className="banner__contents">
          <h1 className="banner__name">{ban_name !== "" && ban_name}</h1>
          <div className="banner__buttons">
            <button className="banner__but">
              <div className="banner__button__icon">
                <BsPlayFill />
              </div>
              Play
            </button>
            <button className="banner__but">More info</button>
          </div>
          <div className="banner__des">
            <div className="banner_des12">
              {ban_dec.length > 0 && ban_dec.substring(0, 100) + " ..."}
            </div>
          </div>
        </div>
      </div>
      <div className="rows">
        {wat}
        <RowSlider
          movie={trending}
          name="Trending Movies"
          watchlist={watchlist}
          addToWatchlist={setToWatchlist}
          iswatchlist={false}
        />
        <RowSlider
          movie={horroMovies}
          name="Horror Movies"
          watchlist={watchlist}
          addToWatchlist={setToWatchlist}
          iswatchlist={false}
        />
        <RowSlider
          movie={romanceMovies}
          name="Romance Movies"
          watchlist={watchlist}
          addToWatchlist={setToWatchlist}
          iswatchlist={false}
        />
        <RowSlider
          movie={comedy}
          name="Comedy Movies"
          watchlist={watchlist}
          addToWatchlist={setToWatchlist}
          iswatchlist={false}
        />
        {/* <RowSlider
          movie={docu}
          name=" Documentary Movies"
          watchlist={watchlist}
          addToWatchlist={setToWatchlist}
          iswatchlist={false}
        /> */}
      </div>
    </div>
  );
}
export default Slider;
