import React from "react";

import { SignIn } from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-up-page.style.scss";

const SignInUpPage = () => (
  <div className="sign-in-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUpPage;
