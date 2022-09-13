import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../components/img/logo.png";
import "./styles/navbar.css";

const NavBar = () => {
  return (
    <div>
      <header className="topheader">
        <nav className="topnav">
          <img src={logo} className="logo" alt="" />
          <h1 className="titulo">XIAOMI</h1>
          <ul className="menu">
            <li>
              <NavLink className="nav__link" to="/">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/categoria/celulares">
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/categoria/relojes">
                Reloj
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="cart">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
