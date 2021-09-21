import React from "react";

import { FormInput } from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/userReducer/userReducer";

import "./sign-in.style.scss";

import { connect } from "react-redux";

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({email, password});
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;

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
          <div className="signIn-button">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={ googleSignInStart }
              isGoogleButton
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
