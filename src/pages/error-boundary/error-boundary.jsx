import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {

    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'}/>
          <ErrorImageText>This Page is Lost in Space</ErrorImageText>
        </ErrorImageOverlay>
      ) 
    }
    return this.props.children
  }
}

export default ErrorBoundary;