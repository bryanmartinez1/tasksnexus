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
  authModalProperties,
} from "src/constants/cssProperties";
import ImgDropDown from "src/components/dropDowns/imgDropDown/ImgDropDown";
import MenuIcon from "src/icons/menu.svg";
import { routes, sitename } from "src/constants/app";
import { auth } from "src/constants/auth";
import Modal from "src/components/modal/Modal";

import "./navbar.css";
import LogIn from "src/pages/auth/LogIn";
import SignUp from "src/pages/auth/SignUp";

function Navbar() {
  const navigate = useNavigate();
  const [navBarWidth, setNavbarWidth] = useState<number>(window.innerWidth);
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [openLogInModal, setLogInModal] = useState<boolean>(false);
  const [openSignUpModal, setSignUpModal] = useState<boolean>(false);

  const toggleLogInModal = () => {
    setSignUpModal(false);
    setLogInModal(!openLogInModal);
  };

  const toggleSignUpModal = () => {
    setLogInModal(false);
    setSignUpModal(!openSignUpModal);
  };

  const logOut = () => {
    alert("Log Out");
  };

  useEffect(() => {
    const handleResize = () => {
      setNavbarWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const profileOptions = isLoggedIn
    ? [routes.profile.name, routes.settings.name, logOut.name]
    : [auth.logIn.name, auth.signUp.name];
  const profileFunctions = isLoggedIn
    ? [
        () => navigate(routes.profile.route),
        () => navigate(routes.settings.route),
        () => logOut(),
      ]
    : [() => toggleLogInModal(), () => toggleSignUpModal()];

  const allNavOptions: string[] = [
    routes.work.name,
    routes.groups.name,
    routes.help.name,
    ...profileOptions,
  ];

  const allNavFunctions: (() => void)[] = [
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
      <Modal
        show={openLogInModal}
        hide={toggleLogInModal}
        content={<LogIn goToSignUp={toggleSignUpModal} />}
        title={auth.logIn.name}
        {...authModalProperties}
      />
      <Modal
        show={openSignUpModal}
        hide={toggleSignUpModal}
        content={<SignUp goToLogIn={toggleLogInModal} />}
        title={auth.signUp.name}
        {...authModalProperties}
      />
    </div>
  );
}

export default Navbar;
