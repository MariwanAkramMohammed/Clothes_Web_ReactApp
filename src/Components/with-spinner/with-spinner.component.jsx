import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinner = (CollectionComponent) => {
  const SpinnerCheck = ({ isLoading, ...other }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>

    ) : (
      <CollectionComponent {...other} />
    );
  };
  return SpinnerCheck;
};
export default WithSpinner;
