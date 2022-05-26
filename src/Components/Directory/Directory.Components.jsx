import React from "react";
import "./Directory.style.scss";
import MenuItem from "../Menu-Item/Menu-Item.Components";
import { selectSectionDirectory } from "../../redux/reducer/Directory/Directory.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...other }) => (
      <MenuItem key={id} {...other} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectSectionDirectory,
});
export default connect(mapStateToProps)(Directory);
