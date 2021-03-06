import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item-bag">
    <img alt="item" src={imageUrl} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
