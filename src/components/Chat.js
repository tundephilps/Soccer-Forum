import React from "react";
import { IoIosSend } from "react-icons/io";
import two from "../images/2.jpg";
import one from "../images/1.jpg";
import three from "../images/3.jpg";

const Chat = () => {
  return (
    <div class="group-chat">
      <div class="group-chat-head">
        <h3>Fortnite Group Chat</h3>
        <div class="message">
          <div class="icon"></div>
          <p className="notenumber">115</p>
        </div>
      </div>
      <div class="chat-text-container">
        <div class="chat-text">
          <div class="profile-with-text">
            <img src={two} alt="Profile Picture" />
            <div class="text short">
              <p>Hey Guys</p>
            </div>
          </div>

          <div class="profile-with-text">
            <img src={three} alt="Profile Picture" />
            <div class="text">
              <p>No I am play God of War</p>
            </div>
          </div>

          <div class="profile-with-text left-align">
            <div class="text owner">
              <p>Yeah sure I'm Down.........</p>
            </div>
            <img src={one} alt="Profile Picture" />
          </div>

          <div class="chat-area-container">
            <div>
              <input type="text" placeholder="Write a Message" />
            </div>
            <div class="up-arrow">
              <i class="fa-solid">
                <IoIosSend />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
