import React from "react";
import Banner from "./components/Banner";
import Catelogue from "./components/Catelogue";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Streamer from "./components/Streamer";
import "./App.scss";
import Chat from "./components/Chat";

function App() {
  return (
    <body>
      <div class="main-container">
        <Sidebar />
        <div class="sub-container">
          <Header />

          <div class="right-container">
            <div class="banners-container">
              <Banner />
              <div>
                <Streamer />
              </div>
              <Catelogue />
            </div>
            <div class="chat-area">
              <div class="chat-container">
                <Profile />
                <Chat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
