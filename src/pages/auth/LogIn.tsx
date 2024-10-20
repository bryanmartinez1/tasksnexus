import React, { useState } from "react";
import WordButton from "src/components/buttons/wordButton/WordButton";
import { auth, authFormLabels } from "src/constants/auth";
import "src/pages/auth/auth.css";
import {
  wordButtonProperties,
  submitButton,
} from "src/constants/cssProperties";

interface LogInForm {
  email: string;
  password: string;
}

type LogInProps = {
  goToSignUp: () => void;
};

function LogIn({ goToSignUp }: LogInProps) {
  const [loginForm, setLoginForm] = useState<LogInForm>({
    email: "",
    password: "",
  });
  const onSubmit = () => {
    alert(`${loginForm.email}\n${loginForm.password}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="authHolder">
      <form className="formHolder" onSubmit={onSubmit} noValidate>
        <label className="authLabel">{authFormLabels.email}</label>
        <input
          className="authInput"
          type="email"
          placeholder="Enter email address here"
          value={loginForm.email}
          name="email"
          onChange={handleChange}
        />
        <label className="authLabel">{authFormLabels.password}</label>
        <input
          className="authInput"
          type="password"
          name="password"
          placeholder="Enter password here"
          value={loginForm.password}
          onChange={handleChange}
        />
        <div className="authFormButton">
          <WordButton
            text={authFormLabels.dontHaveAccount}
            onClick={() => goToSignUp()}
            {...wordButtonProperties}
            padding="5px 5px 5px 5px"
            fontSize="14px"
          />
          <WordButton
            text={authFormLabels.forgotPassword}
            onClick={() => goToSignUp()}
            {...wordButtonProperties}
            padding="5px 5px 5px 5px"
            fontSize="14px"
          />
          <WordButton
            text={authFormLabels.submit}
            onClick={() => {}}
            type="submit"
            {...submitButton}
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
