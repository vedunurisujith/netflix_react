import React, { useEffect, useState } from "react";
import "./nav.css";

function NavBar() {
  const [show, showHandler] = useState(false);
  const downSlide = () => {
    if (window.scrollY > 100) {
      showHandler(true);
    } else {
      showHandler(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showHandler);
    return () => {
      window.removeEventListener("scroll", showHandler);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>
        <div className="nav_list">
          <a href="" className="nav_list_objects">Home</a>
          <a href=""className="nav_list_objects">TV SHows</a>
          <a href=""className="nav_list_objects">Movies</a>
          <a href=""className="nav_list_objects">New Popular</a>
          <a href=""className="nav_list_objects">My List</a>
        </div>
        <img
          className="nav_avator"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default NavBar;
