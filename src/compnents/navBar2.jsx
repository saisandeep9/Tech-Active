import React from "react";
import { NavLink } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-ligh justify-content-around"
        style={{ padding: "0px", margin: "20px" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            {" "}
            <a class="nav-link" href="#">
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar2;
