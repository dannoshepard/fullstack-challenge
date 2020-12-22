import React from "react";
import {
    Link
  } from "react-router-dom";
import { NBA, MLB } from "../boxscore/useFeed";
import { NBA_ROUTE, MLB_ROUTE } from "./routes";
import logo from "../media/images/logo.png"

export const NavigationContainer = () => (
    <div className="navigation__container">
        <div className="navigation__container__left">
            <img src={logo} alt="Barstool Sports"/>
        </div>
        <div className="navigation__container__right">
            <Link to={NBA_ROUTE}>{NBA}</Link>
            <Link to={MLB_ROUTE}>{MLB}</Link>
        </div>
    </div>
)