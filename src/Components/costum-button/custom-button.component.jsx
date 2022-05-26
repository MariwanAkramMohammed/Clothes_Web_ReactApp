import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children,SignInGoogle,invested, ...otherprop }) => (
  <button className={`${invested?'invested':''} custom-button ${SignInGoogle?'sign-in-google':''}`} {...otherprop}>
    {children}
  </button>
);
export default CustomButton;
