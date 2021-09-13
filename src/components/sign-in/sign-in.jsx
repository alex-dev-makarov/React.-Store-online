import React from "react";

import { FormInput } from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";


import { auth } from "../../firebase/firebase.utils";


export class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch(error) {
      console.log(error)
    }
    
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="Password"
            type="password"
          />
          <div className='signIn-button'>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton typr='button'onClick={signInWithGoogle} isGoogleButton>
            Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
