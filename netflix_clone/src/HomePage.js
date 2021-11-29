import { useEffect, useState } from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Slider from "./Slider";

function HomePage() {
return <div className="home_box">
    <NavBar/>
    <Slider/>
      </div>;
}
export default HomePage;
