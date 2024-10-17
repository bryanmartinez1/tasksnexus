import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WordButton from "src/components/buttons/wordButton/WordButton";
import IMGButton from "src/components/buttons/imgButton/ImgButton";
import profileIcon from "src/icons/user.svg";
import helpIcon from "src/icons/help-circle.svg";
import {
  homeButtonProperties,
  wordButtonProperties,
  imgButtonProperties,
} from "src/components/navbar/NavbarCSSPropertoies";
import ImgDropDown from "src/components/dropDowns/imgDropDown/ImgDropDown";
import MenuIcon from "src/icons/menu.svg";
import { routes, logOut, sitename } from "src/components/appConstants";

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [navBarWidth, setNavbarWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileOptions = isLoggedIn
    ? [routes.profile.name, routes.settings.name, logOut.name]
    : [routes.logIn.name, routes.signUp.name];
  const profileFunctions = isLoggedIn
    ? [
        () => navigate(routes.profile.route),
        () => navigate(routes.settings.route),
        () => navigate("/logout"),
      ]
    : [() => navigate(routes.logIn.route), () => navigate(routes.signUp.route)];

  useEffect(() => {
    const handleResize = () => {
      setNavbarWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const allNavOptions = [
    routes.work.name,
    routes.groups.name,
    routes.help.name,
    ...profileOptions,
  ];
  const allNavFunctions = [
    () => navigate(routes.work.route),
    () => navigate(routes.groups.route),
    () => navigate(routes.help.route),
    ...profileFunctions,
  ];
  const menu: string = "Menu";

  return (
    <div className="navbar">
      <WordButton
        text={navBarWidth >= 300 ? sitename.longName : sitename.shortName}
        onClick={() => navigate(routes.home.route)}
        {...homeButtonProperties}
      />
      {navBarWidth >= 550 ? (
        <div className="navbar-button-groups">
          <WordButton
            {...wordButtonProperties}
            text={routes.work.name}
            onClick={() => navigate(routes.work.route)}
          />
          <WordButton
            {...wordButtonProperties}
            text={routes.groups.name}
            onClick={() => navigate(routes.groups.route)}
          />
          <IMGButton
            src={helpIcon}
            alt={routes.help.name}
            toolTipText={routes.help.name}
            onClick={() => navigate(routes.help.route)}
            {...imgButtonProperties}
          />
          <ImgDropDown
            src={profileIcon}
            alt={routes.profile.name}
            toolTipText={routes.profile.name}
            buttonProps={imgButtonProperties}
            options={profileOptions}
            optionsFunctions={profileFunctions}
          />
        </div>
      ) : (
        <ImgDropDown
          src={MenuIcon}
          alt={menu}
          toolTipText={menu}
          buttonProps={imgButtonProperties}
          options={allNavOptions}
          optionsFunctions={allNavFunctions}
        />
      )}
    </div>
  );
}

export default Navbar;
