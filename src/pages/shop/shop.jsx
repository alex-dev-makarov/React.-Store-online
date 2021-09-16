import React from "react";

import CollectionPage from "../collection/collection";
import { updateCollections } from "../../redux/shopDataReducer/shopDataReducer";
import Loader from "../../components/Loader/loader";

import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";

import { connect } from "react-redux";
import {
  firestore,
  convertCollectionData,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithLoader = Loader(CollectionOverview);
const CollectionPageWithLoader = Loader(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubsribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionData(snapshot);
      this.props.updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithLoader isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithLoader isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(ShopPage);
