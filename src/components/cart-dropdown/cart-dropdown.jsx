import React from "react";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectorCartItem } from "../../redux/cart-reducer/cart-selector";
import { createStructuredSelector } from "reselect";
import { setDropdown } from "../../redux/cart-reducer/cart-reducer";
import "./cart-dropdown.style.scss";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="dropdown-empty">You didn't add anything</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(setDropdown());
      }}>
        Check Out
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
