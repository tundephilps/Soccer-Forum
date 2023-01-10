import React from "react";
import { FaHome } from "react-icons/fa";
import { BiJoystick } from "react-icons/bi";
import { FaComments, FaStar } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { ImExit } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="aside">
      <div className="aside-first">
        <ul>
          <div className="site-border">
            <a href="#">
              <li>
                <i className="fa-solid fa-m logo"></i>
              </li>
            </a>
          </div>
          <a href="#">
            <li>
              <i className="fa-solid">
                <FaHome />
              </i>
            </li>
          </a>

          <a href="#">
            <li>
              <i class="fa-solid">
                <BiJoystick />
              </i>
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa-sharp fa-solid">
                <FaComments />
              </i>
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa-solid">
                <FaStar />
              </i>
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa-solid">
                <BiLineChart />
              </i>
            </li>
          </a>
        </ul>
      </div>

      <div class="aside-second">
        <ul>
          <a href="#">
            <li>
              <i class="fa-solid">
                <TbSettings />
              </i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="fa-solid">
                <ImExit />
              </i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
