import React from "react";

import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySection } from "../../redux/directoryReducer/directorySelector";
import { createStructuredSelector } from "reselect";

import "../directory/directory.style.scss";


const Directory = ({ section }) => (
  <div className="directory-menu">
    {section.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection
})

export default connect(mapStateToProps) (Directory)