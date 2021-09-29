import React from "react";

import { connect } from "react-redux";
import { signOutStart } from "../../redux/userReducer/userReducer";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

import CartBag from "../cart-bag/cart-bag";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart-reducer/cart-selector";
import { selectCurrentUser } from "../../redux/userReducer/user.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNavLink,
  Line,
} from "./Header.styles";

const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionNavLink to="/shop">SHOP</OptionNavLink>
      <OptionNavLink to="/">CONTACT</OptionNavLink>
      {currentUser ? (
        <OptionNavLink as='div' onClick={signOutStart}>SIGN OUT</OptionNavLink>
      ) : (
        <OptionNavLink to="/signin">SIGN IN</OptionNavLink>
      )}
      <CartBag />
    </OptionsContainer>
    {!cartHidden && <CartDropdown />}
    <Line></Line>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps, { signOutStart })(Header);
