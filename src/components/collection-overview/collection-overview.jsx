import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPrev } from "../../redux/shopDataReducer/shopDataSelector";
import PreviewCollection from "../preview-collection/preview-collection";

const CollectionOverview = ({ collections }) => (
  <div className="overview-collection">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPrev,
});

export default connect(mapStateToProps)(CollectionOverview);
