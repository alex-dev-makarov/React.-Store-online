import React, { useEffect, lazy, Suspense } from "react";

import { fetchCollectionStart } from "../../redux/shopDataReducer/shopDataReducer";

import { Route } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import { connect } from "react-redux";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection-page-container")
);
const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview-container")
);

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Loader />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, { fetchCollectionStart })(ShopPage);
