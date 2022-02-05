import React from "react";
import "./StartScreen.css";
import HomePage from "./HomePage";
import {Link,} from "react-router-dom";
function StartScreen() {
  return (
    <div className="main_box">
    <div className="start_banner">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>
       <Link to="/homepage"   className="start_nav_button">Sign In</Link> 
   
 
      </div>
      <div className="whole_cont">
        <div className="conts">
        <div className="start_contents">
          <p>
            <h1 className="start_h1">
              Unlimited movies, TV <span>shows and more.</span>
            </h1>
            Watch anywhere. Cancel anytime.{" "}
              Ready to watch? Enter your email to create or restart your
              membership.

          </p>
          </div>
          <div className="input_box_contents">
            <input
              className="inputbox"
              placeholder="Email address"
              type="email"
            ></input>
            <button className="input_button">Get Started</button>
          </div>
  </div>
      </div> 
      <div className="break"></div>
      
      <div className="home_second">
        <div className="home_second_h1">
          <h1>Enjoy on your TV</h1>
        </div>
      </div>
      </div>
      </div>
  );
}

export default StartScreen;
