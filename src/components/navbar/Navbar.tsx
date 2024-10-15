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

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileOptions = ["Log In", "Sign Up"];
  const profileFunctionOptions = [
    () => navigate("/login"),
    () => navigate("/signup"),
  ];
  const loggedInOptions = ["Profile", "Settings", "Log Out"];
  const loggedInFunctionOptions = [
    () => navigate("/profile/"),
    () => navigate("/settings"),
    () => navigate("/logout"),
  ];
  useEffect(() => {}, []);

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
          options={isLoggedIn ? loggedInOptions : profileOptions}
          optionsFunctions={
            isLoggedIn ? loggedInFunctionOptions : profileFunctionOptions
          }
        />
      </div>
    </div>
  );
}

export default Navbar;
