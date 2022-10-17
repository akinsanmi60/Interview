import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100%;
  color: #d9d9d9;
  .logoimg {
    width: 100%;
  }

  h1,
  h3 {
    color: #d9d9d9;
    font-size: 30px;
    margin-top: 20px;
    padding: 20px;
    margin-bottom: -20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: -23px;
  }

  .imgcard {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    h1,
    h3 {
      font-size: 25px;
      margin-bottom: -17px;
    }
    .logoimg {
      height: 150px;
    }
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }

    .logoimg {
      height: 120px;
    }
  }
  @media screen and (max-width: 375px) {
    .logoimg {
      height: 100px;
    }
  }
`;
