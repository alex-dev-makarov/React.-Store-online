import React from "react";
import CollectionItem from "../collection-item/collection-item";

import {
  PreCollectionContainer,
  PreCollectionTitle,
  Preview,
} from "./preview-collection.styles";

const PreviewCollection = ({ title, items }) => {
  return (
    <PreCollectionContainer>
      <PreCollectionTitle>{title.toUpperCase()}</PreCollectionTitle>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </PreCollectionContainer>
  );
};

export default PreviewCollection;
