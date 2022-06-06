import React from "react";
import { CustomButoonBT } from "./custom-button.style";

const CustomButton = ({ children, ...otherprop }) => (
  <CustomButoonBT {...otherprop}>{children}</CustomButoonBT>
);
export default CustomButton;
