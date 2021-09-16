import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './loader.styles'

const Loader = WrappedComponent => ({ isLoading, ...oherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...oherProps }/>
    )
}

export default Loader;