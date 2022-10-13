import styled from "styled-components";

const LoaderWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .loader {
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #d9d9d9;
    font-size: 50px;
    text-align: center;
  }
`;
export default LoaderWrapper;
