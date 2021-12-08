import React from "react";
import "./StartScreen.css";
import HomePage from "./HomePage";
function StartScreen() {
  return (
    <div className="start_banner">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>
        <button
          className="start_nav_button"
          onClick={() => (window.location.href = "./HomePage.js")}
        >
          Sign In
        </button>
      </div>
      <div className="whole_cont">
        <div className="start_contents">
          <p>
            <h1 className="start_h1">
              Unlimited movies, TV <span>shows and more.</span>
            </h1>
            <h2 style={{ padding: "10px" }}>Watch anywhere. Cancel anytime.</h2>{" "}
            <h3 style={{ padding: "10px" }}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </p>
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
      <br />
      <div className="home_second">
        <div className="home_second_h1">
          <h1>Enjoy on your TV</h1>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
