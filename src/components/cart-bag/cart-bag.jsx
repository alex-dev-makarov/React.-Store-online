import React from "react";

import { setDropdown } from "../../redux/cart-reducer/cart-reducer";
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/cart-reducer/cart-selector";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-bag.style.scss";

const CartBag = ({ setDropdown, itemCount }) => (
  <div onClick={() => setDropdown()} className="cart-icon">
    <ShoppingIcon className="cart-item" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemCount
})

export default connect(mapStateToProps, { setDropdown })(CartBag);
