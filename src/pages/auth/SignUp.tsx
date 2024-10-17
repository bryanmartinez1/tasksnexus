import React, { useState } from "react";

interface SignUpFormData {
  username: string;
  password: string;
}

//To be placed in a modal

function SignUp() {
  const [signUpData, setSignUpData] = useState<SignUpFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const validPassword = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (signUpData.username === "" || signUpData.password === "") {
      setError("Please enter both username and password.");
      return;
    }
    setError(null);
    console.log("Signing Up with:", signUpData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={signUpData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={signUpData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default SignUp;
