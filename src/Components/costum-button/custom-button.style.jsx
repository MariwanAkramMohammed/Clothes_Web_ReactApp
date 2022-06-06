import styled, { css } from "styled-components";

const isGoogleStyle = css`
  background-color: deepskyblue;
  color: white;
  border: none;
  &:hover {
    background-color: #1961a8;
    color: white;
  }
`;
const investedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  top: 255px;
  opacity: 0.05;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    opacity: 0.9;
  }
`;
const ButtonNoraml = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const checkTypeButton = (props) => {
  if (props.SignInGoogle) {
    return isGoogleStyle;
  }
  return props.invested ? investedStyle : ButtonNoraml;
};

export const CustomButoonBT = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 10px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${checkTypeButton}
`;
