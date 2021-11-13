import React from "react";
import avatar1 from "../../assets/images/avatar1.webp";
import avatar2 from "../../assets/images/avatar2.webp";
import { EyeFill } from "react-bootstrap-icons";
import "./smallWidget.scss";

export default function SmallWidget() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={avatar1} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Monica Geller</span>
            <span className="widgetSmallJob">CEO</span>
          </div>
          <button className="widgetSmallBtn">
            <EyeFill className="widgetSmallBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar2} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Mike Tyson</span>
            <span className="widgetSmallJob">CEO</span>
          </div>
          <button className="widgetSmallBtn">
            <EyeFill className="widgetSmallBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar1} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Phoebe Buffay</span>
            <span className="widgetSmallJob">CEO</span>
          </div>
          <button className="widgetSmallBtn">
            <EyeFill className="widgetSmallBtnIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
