import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem  from '../../components/checkout-item/checkout-item';
import { selectorCartItem, selectTotalCart } from "../../redux/cart-reducer/cart-selector";

import "./check-out.style.scss";

const CheckOut = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="cheakout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quality</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => <CheckOutItem key={ cartItem.id } cartItem={ cartItem }/>)}
    <span className='checkout-total'>TOTAL: ${total}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItem,
  total: selectTotalCart,
});

export default connect(mapStateToProps)(CheckOut);
