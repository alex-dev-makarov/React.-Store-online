import React, { useEffect } from "react";

import { fetchCollectionStart } from "../../redux/shopDataReducer/shopDataReducer";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionPageContainer from "../collection/collection-page-container";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(null, { fetchCollectionStart })(ShopPage);
