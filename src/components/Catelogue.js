import React from "react";
import two from "../images/2.jpg";
import one from "../images/1.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
//import two from "../images/2.jpg";

const Catelogue = () => {
  return (
    <div class="game-banners">
      <div class="game-banners-head">
        <ul>
          <a href="#">
            <li class="clicked">Watch Now</li>
          </a>
          <a href="#">
            <li>Trending</li>
          </a>
          <a href="#">
            <li>Top Streams</li>
          </a>
          <a href="#">
            <li>Tounaments</li>
          </a>
        </ul>
      </div>
      <div class="main-game-banner">
        <div class="game">
          <div class="game-photo one">
            <div class="watch">
              <p>Live 3.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={one} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Arsenal</p>
              <p class="followers">500k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo two">
            <div class="watch">
              <p>Live 8.5k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={two} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Fortnite Leading Game</p>
              <p class="followers">200k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo three">
            <div class="watch">
              <p>Live 3.7k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={three} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Clearing God of War</p>
              <p class="followers">101.1k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo four">
            <div class="watch">
              <p>Live 4.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={four} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Fortnite Halloween Skins</p>
              <p class="followers">92k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo five">
            <div class="watch">
              <p>Live 10.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={four} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Fortnite Leading Game</p>
              <p class="followers">92k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo six">
            <div class="watch">
              <p>Live 1.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={five} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">First Time Playing of Honor</p>
              <p class="followers">101.1k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo seven">
            <div class="watch">
              <p>Live 4.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo">
              <img src={two} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Playing Overwatch</p>
              <p class="followers">200k Followers</p>
            </div>
          </div>
        </div>

        <div class="game">
          <div class="game-photo eight">
            <div class="watch">
              <p>Live 5.2k</p>
            </div>
          </div>
          <div class="gamer-info">
            <div class="profile-photo eight">
              <img src={one} alt="Profile Picture" />
            </div>
            <div class="profile-desc">
              <p class="user-name">Devil May Cry</p>
              <p class="followers">112 Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catelogue;
