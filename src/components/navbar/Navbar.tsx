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

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileOptions = isLoggedIn ?  ["Profile", "Settings", "Log Out"]: ["Log In", "Sign Up"];
  const profileFunctions = isLoggedIn ? [
    () => navigate("/profile/"),
    () => navigate("/settings"),
    () => navigate("/logout"),
  ]: [
    () => navigate("/login"),
    () => navigate("/signup"),
  ];

  useEffect(() => {}, []);

  const allNavOptions = ['My Work', 'Groups', 'Help', ...profileOptions];
  const allNavFunctions = [() => navigate("/work"), () => navigate("/groups"), () => navigate("/help"), ...profileFunctions];

  return (
    <div className="navbar">
      <WordButton
        text="Tasks Nexus"
        onClick={() => navigate("/")}
        {...homeButtonProperties}
      />
      <div className="navbar-button-groups">
        <WordButton
          {...wordButtonProperties}
          text="My Work"
          onClick={() => navigate("/work")}
        />
        <WordButton
          {...wordButtonProperties}
          text="Groups"
          onClick={() => navigate("/groups")}
        />
        <IMGButton
          src={helpIcon}
          alt="Help Button"
          toolTipText="Help"
          onClick={() => navigate("/help")}
          {...imgButtonProperties}
        />
        <ImgDropDown
          src={profileIcon}
          alt="Profile"
          toolTipText="Profile"
          buttonProps={imgButtonProperties}
          options={profileOptions}
          optionsFunctions={profileFunctions}
        />
        <ImgDropDown src={MenuIcon}
          alt="Menu"
          toolTipText="Menu"
          buttonProps={imgButtonProperties}
          options={allNavOptions}
          optionsFunctions={allNavFunctions}/>
      </div>
    </div>
  );
}

export default Navbar;
