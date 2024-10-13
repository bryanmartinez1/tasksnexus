import React from "react";
import "./navbar.css";
import WordButton from "src/components/buttons/wordButton/WordButton";
import IMGButton from "src/components/buttons/imgButton/ImgButton";
import profileIcon from "src/icons/user.svg";
import helpIcon from "src/icons/help-circle.svg";
import settingsIcon from "src/icons/settings.svg";
import { useNavigate } from "react-router-dom";

const homeButtonProperties = {
  fontSize: "2rem",
  backgroundColor: "transparent",
  hoverBackgroundColor: "transparent",
  border: "none",
  padding: "5px",
  borderRadius: "5px",
  margin: "0px 10px 0px 10px",
};

const wordButtonProperties = {
  fontSize: "16px",
  backgroundColor: "transparent",
  hoverBackgroundColor: "#DCDCDC",
  border: "none",
  margin: "0px 10px 0px 10px",
  padding: "0px 10px 0px 10px",
  height: "100%",
  borderRadius: "5%",
};

const imgButtonProperties = {
  borderRadius: "5%",
  hoverBackgroundColor: "#DCDCDC",
  width: 30,
  height: "100%",
  margin: "0px 10px 0px 10px",
  padding: "0px 10px 0px 10px",
};

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
        <WordButton
          {...wordButtonProperties}
          text="Create"
          onClick={() => navigate("/create")}
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
        <IMGButton
          src={profileIcon}
          alt="Profile Button"
          toolTipText="Profile"
          onClick={() => navigate("/profile")}
          {...imgButtonProperties}
        />
      </div>
    </div>
  );
}

export default Navbar;
