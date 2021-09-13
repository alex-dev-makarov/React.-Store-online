import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart-reducer/cart-reducer";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
    const {  name, price, imageUrl} = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="collection-name">{name}</span>
        <span className="collection-price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}inverted >add to cart</CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
