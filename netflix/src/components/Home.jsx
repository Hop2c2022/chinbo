import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";
export const Home = () => {
  return (
    <div className="HomeBig">
      <br />
      <div>
        <Header />
      </div>
      <div className="HomeContent">
        <div className="HomeDuuren">
          <div className="HomeTop">
            <img className="HomeN" src="N.svg" />
            <div className="HomeShow">Series</div>
          </div>
          <div className="HomeMiddle">MAID</div>
          <div className="HomeUnder">
            <button className="HomePlay">Play</button>
            <button className="HomeInfo">More info</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
