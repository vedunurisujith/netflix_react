import { React, useState } from "react";
import Carousel from "react-elastic-carousel";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AiTwotoneLike } from "react-icons/ai";
import "./RowSlider.css";
function RowSlider(props) {
  const movie = props.movie;

  function fun1(mov) {
    var islike = false;
    console.log(mov.id, "hello");
    const mov_id = mov.id;
    const likeButton =
      islike === false ? (
        <BiLike className="play_icon_like"></BiLike>
      ) : (
        <AiTwotoneLike className="play_icon_like"></AiTwotoneLike>
      );

    const butClick = () => {
      islike = !islike;
    };
    // if (element.id != mov_id) {
    //   const nt = [...props.watchlist, mov];
    //   props.addToWatchlist(nt);
    //   return abc
    // }

    const adul = mov.adult === "false" ? "16+" : "18+";
    const mov_type = mov.media_type ? mov.media_type : "movie";
    const called = () => {
      console.log(mov.id, "mov.id");
      console.log(props.watchlist, "props.watchlist");
      // const abc =
      //   props.wathclist != undefined
      //     ? props.watchlist.filter((element) => element.id != mov_id)
      //     : [];
      const abc = [];
      const c =
        props.movie != undefined
          ? props.movie.filter((element) => {
              if (element.id != mov_id) {
                abc.push(element);
              }
            }, props.addToWatchlist(abc))
          : props.movie;
    };
    return (
      <div className="container">
        <img
          className="image"
          src={"https://image.tmdb.org/t/p/original" + mov.poster_path}
          alt=""
        />
        <div className="overlay">
          <div className="text">
            {mov.name}
            {mov.title}
            <div>
              <BsFillPlayCircleFill className="play_icon"></BsFillPlayCircleFill>
              <ImCross onClick={called} className="play_icon_1"></ImCross>
              <span onClick={butClick}>{likeButton}</span>
              <BiDislike className="play_icon_like"></BiDislike>
            </div>
            <div>
              {adul} {mov_type} HD
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  function fun(mov) {
    console.log(mov);
    var islike = false;
    console.log(mov.id, "hello");
    const mov_id = mov.id;
    const likeButton =
      islike === false ? (
        <BiLike className="play_icon_like"></BiLike>
      ) : (
        <AiTwotoneLike className="play_icon_like"></AiTwotoneLike>
      );

    const butClick = () => {
      islike = !islike;
    };

    const adul = mov.adult === "false" ? "16+" : "18+";
    const mov_type = mov.media_type ? mov.media_type : "movie";
    const called = () => {
      console.log(mov.id);
      let flag = 0;
      props.watchlist.filter((element) => {
        if (element.id == mov_id) {
          flag = 1;
        }
      });
      if (flag == 0) {
        const nt = [...props.watchlist, mov];
        props.addToWatchlist(nt);
      }
    };

    return (
      <div className="container">
        <img
          className="image"
          src={"https://image.tmdb.org/t/p/original" + mov.poster_path}
          alt=""
        />
        <div className="overlay">
          <div className="text">
            {mov.name}
            {mov.title}
            <div>
              <BsFillPlayCircleFill className="play_icon"></BsFillPlayCircleFill>
              <AiOutlinePlusCircle
                onClick={called}
                className="play_icon circle"
              ></AiOutlinePlusCircle>
              <span onClick={butClick}>{likeButton}</span>
              <BiDislike className="play_icon_like"></BiDislike>
            </div>
            <div>
              {adul} {mov_type} HD
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1400, itemsToShow: 8 },
  ];
  return props.iswatchlist ? (
    <div>
      <br />
      <h1 className="popular_h1">{props.name}</h1>
      <Carousel
        itemPosition="START"
        renderPagination={({ pages, activePage, onClick }) => {
          return <div></div>;
        }}
        itemPadding={[10, 5]}
        breakPoints={breakPoints}
      >
        {movie.length > 0 && movie.map(fun1)}
      </Carousel>
    </div>
  ) : (
    <div>
      <br />
      <h1 className="popular_h1">{props.name}</h1>
      <Carousel
        itemPosition="START"
        renderPagination={({ pages, activePage, onClick }) => {
          return <div></div>;
        }}
        itemPadding={[10, 5]}
        breakPoints={breakPoints}
      >
        {movie.length > 0 && movie.map(fun)}
      </Carousel>
    </div>
  );
}
export default RowSlider;
