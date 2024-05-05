import React, { useState } from "react";
import "../../assets/Styles/about.css";
import { NavLink } from "react-router-dom";
export default function Card({ icon, style, title, buttonColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="box pt-5">
        <div className="card p-5 justify-content-center align-items-center boxCard">
          <div className="carditem" style={style}>
            <p style={{ transform: "rotate(-45deg)"}}>{icon}</p>
          </div>
          <div
            className="horizontalLine d-flex justify-content-center align-items-center mt-5 mb-2"
            style={{
              height: "1px",
              width: "200px",
              backgroundColor: "#c9c9c9",
            }}
          >
            <i className="bi bi-diamond-fill" style={{ color: "#c9c9c9" }}></i>
          </div>
          <div
            className="cardtitle text-center mt-3"
            style={{ backgroundColor: isHovered ? `${buttonColor}` : "" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink className="text-decoration-none text-muted">
              {title}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
