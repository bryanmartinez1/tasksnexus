import React, { useState } from "react";
import WordButton from "src/components/buttons/wordButton/WordButton";
import { auth, authFormLabels } from "src/constants/auth";
import "src/pages/auth/auth.css";
import {
  wordButtonProperties,
  submitButton,
} from "src/constants/cssProperties";

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

type SignUpProps = {
  goToLogIn: () => void;
};

function SignUp({ goToLogIn }: SignUpProps) {
  const [signupForm, setSignupForm] = useState<SignUpForm>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const onSubmit = () => {
    alert(`${signupForm.email}\n${signupForm.firstName}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="authHolder">
      <form className="formHolder" onSubmit={onSubmit} noValidate>
        <label className="authLabel">{authFormLabels.email}</label>
        <input
          className="authInput"
          type="email"
          placeholder="Enter email address here"
          value={signupForm.email}
          name="email"
          onChange={handleChange}
        />
        <label className="authLabel">{authFormLabels.password}</label>
        <input
          className="authInput"
          type="password"
          name="password"
          placeholder="Enter password here"
          value={signupForm.password}
          onChange={handleChange}
        />
        <label className="authLabel">{authFormLabels.confirmPassword}</label>
        <input
          className="authInput"
          type="password"
          placeholder="Confirm password"
          value={signupForm.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <label className="authLabel">{authFormLabels.firstName}</label>
        <input
          className="authInput"
          type="text"
          placeholder="Enter first name"
          value={signupForm.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label className="authLabel">{authFormLabels.lastName}</label>
        <input
          className="authInput"
          type="text"
          placeholder="Enter last name"
          value={signupForm.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <div className="authFormButton">
          <WordButton
            text={authFormLabels.haveAccount}
            onClick={() => goToLogIn()}
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

export default SignUp;
