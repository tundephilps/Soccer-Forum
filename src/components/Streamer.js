import React from "react";

import two from "../images/2.jpg";
import one from "../images/1.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";

const Streamer = () => {
  return (
    <div class="streamers">
      <div class="streamer-heading">
        <a href="#">
          <h3>Top Streamers</h3>
        </a>
        <a href="#">
          <p class="see-more">See more</p>
        </a>
      </div>
      <div class="streamer-flex-container">
        <div class="streamer-container">
          <div class="streamer-photo">
            <img src={two} alt="" />
          </div>
          <div class="streamer-desc">
            <p class="name">Splashmarshmallows</p>
            <p class="followers">500k followers</p>
          </div>
        </div>

        <div class="streamer-container">
          <div class="streamer-photo">
            <img src={three} alt="" />
          </div>
          <div class="streamer-desc">
            <p class="name">InAdventure</p>
            <p class="followers">200k followers</p>
          </div>
        </div>

        <div class="streamer-container">
          <div class="streamer-photo">
            <img src={four} alt="" />
          </div>
          <div class="streamer-desc">
            <p class="name">Kramergy</p>
            <p class="followers">101.1k followers</p>
          </div>
        </div>

        <div class="streamer-container">
          <div class="streamer-photo">
            <img src={five} alt="" />
          </div>
          <div class="streamer-desc">
            <p class="name">RPG Pixel</p>
            <p class="followers">92k followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamer;
