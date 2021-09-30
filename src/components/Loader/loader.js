import React from 'react';
import Spinner from '../spinner/spinner'

const Loader = WrappedComponent => ({ isLoading, ...oherProps }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...oherProps} />
    )
}

export default Loader;