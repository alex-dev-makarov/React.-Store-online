import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shopDataReducer/shopDataSelector";
import CollectionItem from "../../components/collection-item/collection-item";
import {
  CollectionPageContainer,
  TitleCollection,
  CollectionItemsContainer,
} from "./collectionPage";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleCollection>{title}</TitleCollection>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
