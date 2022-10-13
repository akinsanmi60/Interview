import React from "react";
import DotLoader from "react-spinners/DotLoader";
import LoaderWrapper from "./style";

function LoaderLayout() {
  return (
    <LoaderWrapper>
      <div>
        <div className="loader">
          <DotLoader color="#d9d9d9" size={70} speedMultiplier={2} />
        </div>
        <h1>ULX</h1>
      </div>
    </LoaderWrapper>
  );
}

export default LoaderLayout;
