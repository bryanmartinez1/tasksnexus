import React, { useState } from "react";

interface LoginFormData {
  username: string;
  password: string;
}

//To be placed in a modal

function LogIn() {
  const [logInData, setLogInData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogInData({
      ...logInData,
      [name]: value,
    });
  };

  const validPassword = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (logInData.username === "" || logInData.password === "") {
      setError("Please enter both username and password.");
      return;
    }
    setError(null);
    console.log("Logging in with:", logInData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={logInData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={logInData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
