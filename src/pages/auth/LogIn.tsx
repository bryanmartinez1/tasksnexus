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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    alert(`${email}\n${password}`);
  };

  return (
    <div className="authHolder">
      <form className="formHolder" onSubmit={onSubmit} noValidate>
        <label className="authLabel">{authFormLabels.email}</label>
        <input
          className="authInput"
          type="email"
          placeholder="Enter email address here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="authLabel">{authFormLabels.password}</label>
        <input
          className="authInput"
          type="password"
          placeholder="Enter password here"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="authFormButton">
          <WordButton
            text={authFormLabels.dontHaveAccount}
            onClick={() => goToSignUp()}
            {...wordButtonProperties}
            padding="5px 5px 5px 5px"
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
