import styled from "styled-components";

export const ViewWrapper = styled.div`
  color: #d9d9d9;
  .imgbox {
    padding: 20px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    img {
      width: 100%;
    }
  }

  .text {
    position: absolute;
    top: 0;
    font-size: 9px;
    padding: 0px 20px;
    margin-top: 165px;
  }

  @media screen and (max-width: 1024px) {
    .text {
      font-size: 7px;
      margin-top: 130px;
    }
  }
  @media screen and (max-width: 768px) {
    .imgbox {
      gap: 15px;
      grid-template-columns: 1fr 1fr;
    }
    .text {
      font-size: 13px;
      margin-top: 320px;
    }
  }

  @media screen and (max-width: 425px) {
    .text {
      font-size: 8px;
      margin-top: 158px;
    }
  }
  @media screen and (max-width: 375px) {
    .text {
      font-size: 6px;
      margin-top: 138px;
    }
  }
  @media screen and (max-width: 320px) {
    .text {
      font-size: 6px;
      margin-top: 108px;
    }
  }
`;
