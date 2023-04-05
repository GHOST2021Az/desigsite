import { React } from "react";

import { Outlet, Link } from "react-router-dom";
import "./nav.css";

const Layout = () => {
  return (
    <>
      <header class="header">
        <h1 class="logo">
          <a href="#">Flexbox</a>
        </h1>
        <ul class="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="contact/">Contact</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
         
        </ul>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
