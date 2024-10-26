import React, { useState } from "react";
import WordButton from "src/components/buttons/wordButton/WordButton";
import { authConstants, authFormLabels } from "src/constants/auth";
import "src/auth/auth.css";
import {
  wordButtonProperties,
  submitButton,
} from "src/constants/cssProperties";
import { firebaseAuth, database } from "src/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

interface SignUpForm {
  email: string;
  firstName: string;
  lastName: string;
}

interface Passwords {
  password: string;
  confirmPassword: string;
}

type SignUpProps = {
  goToLogIn: () => void;
};

function SignUp({ goToLogIn }: SignUpProps) {
  const [signupForm, setSignupForm] = useState<SignUpForm>({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [passwordForm, setPasswordForm] = useState<Passwords>({
    password: "",
    confirmPassword: "",
  });

  const userCollection = collection(database, "User");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        signupForm.email,
        passwordForm.password
      );

      const currentUser = firebaseAuth.currentUser;
      console.log(currentUser);
      if (currentUser) {
        const userDoc = doc(database, "User", currentUser.uid);
        await setDoc(userDoc, signupForm);
      } else {
        console.error("No user is currently signed in");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
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
          value={passwordForm.password}
          onChange={passwordChange}
        />
        <label className="authLabel">{authFormLabels.confirmPassword}</label>
        <input
          className="authInput"
          type="password"
          placeholder="Confirm password"
          value={passwordForm.confirmPassword}
          name="confirmPassword"
          onChange={passwordChange}
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
