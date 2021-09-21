import { connect } from 'react-redux'
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect'

import { selectCollectionIsFetching } from '../../redux/shopDataReducer/shopDataSelector'
import Loader from '../Loader/loader'
import CollectionOverview from './collection-overview'


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    Loader
)(CollectionOverview)

export default CollectionOverviewContainer;