import React from "react";

import { useSelector } from "react-redux";

import CheckOutItem  from '../../components/checkout-item/checkout-item';
import { selectorCartItem, selectTotalCart } from "../../redux/cart-reducer/cart-selector";

import "./check-out.style.scss";

const CheckOut = () => {
	const  cartItems  = useSelector(selectorCartItem)
	const  total = useSelector( selectTotalCart)
  return (
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
  )
}
  



export default CheckOut;
