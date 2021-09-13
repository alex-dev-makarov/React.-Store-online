import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted && "inverted-button"} ${
      isGoogleButton && "google-button"
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
