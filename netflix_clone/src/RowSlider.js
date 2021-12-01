import { React } from "react";
import Carousel from "react-elastic-carousel";
import "./RowSlider.css";
function RowSlider(props) {
  function fun(mov) {
    return (
      <div className="card">
        <div className="images_card_overlay">
          <div className="card_title">
            {mov.name}
            {mov.title}
          </div>
          <div>{mov.overview} </div>
        </div>

        <img
          className="images_card"
          src={"https://image.tmdb.org/t/p/original" + mov.poster_path}
          alt=""
        />
      </div>
    );
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 5 },
    { width: 900, itemsToShow: 6 },
    { width: 1200, itemsToShow: 7 },
    { width: 1400, itemsToShow: 10 },
  ];
  const movie = props.movie;
  return (
    <div>
      <br />
      <h1 className="popular_h1">{props.name}</h1>
      {/* <div className="container"> */}
      <Carousel
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            // <Flex direction="row">
            //   {pages.map(page => {
            //     const isActivePage = activePage === page
            //     return (
            //       <Square
            //         key={page}
            //         onClick={() => onClick(page)}
            //         active={isActivePage}
            //       />
            //     )
            //   })}
            // </Flex>
            <div></div>
          );
        }}
        itemPadding={[10, 5]}
        // itemsToShow={5}

        breakPoints={breakPoints}
        // enableMouseSwipe="true"
      >
        {movie.length > 0 && movie.map(fun)}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default RowSlider;
