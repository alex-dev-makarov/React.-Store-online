import React, { useState } from "react";

import { FormInput } from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/userReducer/userReducer";

import { connect } from "react-redux";

import "./sign-in.style.scss";


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [usesCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usesCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart({ email, password });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({ ...usesCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          handleChange={handleChange}
          name="password"
          value={password}
          label="Password"
          type="password"
        />
        <div className="signIn-button">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleButton
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
