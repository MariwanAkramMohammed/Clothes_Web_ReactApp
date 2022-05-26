import React from "react";
import "./Menu-Item.style.scss";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let newpathtoBrowser = useNavigate();
  let location = useLocation();
  let currentpath = location.pathname;
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="backgroundImg"
        style={{
          backgroundImage: `URL(${imageUrl})`,
        }}
      ></div>
      <div
        className="content"
        onClick={() => newpathtoBrowser(`${currentpath}${linkUrl}`)}
      >
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
