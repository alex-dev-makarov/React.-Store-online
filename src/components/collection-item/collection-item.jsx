import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart-reducer/cart-reducer";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className='button' onClick={() => addItem(item)} inverted>
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
