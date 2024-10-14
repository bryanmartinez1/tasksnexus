import React from "react";
import "./navbar.css";
import WordButton from "src/components/buttons/wordButton/WordButton";
import IMGButton from "src/components/buttons/imgButton/ImgButton";
import profileIcon from "src/icons/user.svg";
import helpIcon from "src/icons/help-circle.svg";
import settingsIcon from "src/icons/settings.svg";
import { useNavigate } from "react-router-dom";
import WordDropDown from "src/components/dropDowns/wordDropDown/WordDropDown";
import {
  homeButtonProperties,
  wordButtonProperties,
  imgButtonProperties,
} from "src/components/navbar/NavbarCSSPropertoies";
import ImgDropDown from "src/components/dropDowns/imgDropDown/ImgDropDown";

function Navbar() {
  const navigate = useNavigate();
  const profileOptions = ["Log In", "Sign Up"];
  const profileFunctionOptions = [
    () => navigate("/login"),
    () => navigate("/signup"),
  ];

  return (
    <div className="navbar">
      <WordButton
        text="Project Nexus"
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
        <IMGButton
          src={settingsIcon}
          alt="Settings Button"
          toolTipText="Settings"
          onClick={() => navigate("/settings")}
          {...imgButtonProperties}
        />
        <WordDropDown
          title="Profile"
          options={profileOptions}
          optionsFunctions={profileFunctionOptions}
          buttonProps={wordButtonProperties}
        />
        <ImgDropDown
          src={profileIcon}
          alt="Profile"
          toolTipText="Profile"
          buttonProps={imgButtonProperties}
          options={profileOptions}
          optionsFunctions={profileFunctionOptions}
        />
      </div>
    </div>
  );
}

export default Navbar;
