import React from "react";

import Profile from "../images/profile.jpg";
import { AiFillBell } from "react-icons/ai";
import { BsHddNetworkFill } from "react-icons/bs";

const Header = () => {
  return (
    <div class="header">
      <input type="text" placeholder="Search here" />
      <div class="stream-video">
        <div className="video-icon video">
          <i class="fa-solid">
            <BsHddNetworkFill />
          </i>
        </div>
        <p>Start Stream</p>
      </div>
      <div class="profile">
        <div class="alarm">
          <div class="message-count">3</div>
          <i className="fa-sharp fa-solid ">
            <AiFillBell />
          </i>
        </div>
        <div class="profile-photo">
          <img src={Profile} alt="Profile Picture" />
        </div>
        <div class="profile-desc">
          <p class="user-name">Sabrin XX7</p>
          <p class="followers">112 Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
