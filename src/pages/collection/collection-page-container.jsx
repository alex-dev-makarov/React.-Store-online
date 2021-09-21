import { connect } from 'react-redux'
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect'

import { selectCollectionLoaded} from '../../redux/shopDataReducer/shopDataSelector'
import Loader from '../../components/Loader/loader'
import CollectionPage from './collection'


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    Loader
)(CollectionPage)

export default CollectionPageContainer; 