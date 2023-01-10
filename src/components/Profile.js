import React from "react";

import four from "../images/4.jpg";
import one from "../images/1.jpg";
import three from "../images/3.jpg";

const Profile = () => {
  return (
    <>
      <div class="firt-chat-area-container">
        <input type="text" placeholder="Search Friends" />
      </div>
      <div class="chat-header">
        <ul>
          <a href="#">
            <li>Friends</li>
          </a>
          <a href="#">
            <li>Group</li>
          </a>
          <a href="#">
            <li>Requests</li>
          </a>
        </ul>
        <div class="count">
          <p>3</p>
        </div>

        <div class="profiles">
          <div class="profile-photo">
            <img src={four} alt="Profile Picture" />
          </div>
          <div class="profile-desc">
            <p class="user-name">RPG Pixel</p>
            <p class="status play">Playing Game?</p>
          </div>
          <div class="message-count">5</div>
        </div>

        <div class="profiles selected">
          <div class="profile-photo">
            <img src={three} alt="Profile Picture" />
          </div>
          <div class="profile-desc">
            <p class="user-name">RPGPixel</p>
            <p class="status">Not Online</p>
          </div>
        </div>

        <div class="profiles">
          <div class="profile-photo">
            <img src={one} alt="Profile Picture" />
          </div>
          <div class="profile-desc">
            <p class="user-name">RPGPixel</p>
            <p class="status">Online</p>
          </div>
        </div>
        <div class="scroller">
          <div class="scroll"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
