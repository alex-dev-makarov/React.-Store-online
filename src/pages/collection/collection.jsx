import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shopDataReducer/shopDataSelector";
import CollectionItem from "../../components/collection-item/collection-item";
import {
  CollectionPageContainer,
  TitleCollection,
  CollectionItemsContainer,
} from "./collectionPage";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
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

export default CollectionPage;
