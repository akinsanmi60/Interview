import styled from "styled-components";
import logo from "../assets/Vector.png";

export const DashboardWrapper = styled.div`
  height: 100vh;
  color: #d9d9d9;

  .sidebar {
    overflow: auto;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #0f0f0f;
    background-image: url(${logo});
    color: #d9d9d9;
  }

  .menu {
    background-color: transparent;
    color: #d9d9d9;
    width: 100%;
  }

  .profile {
    position: sticky;
    top: 0px;
    display: flex;
    gap: 10px;
    height: 70px;
    background-color: #0f0f0f;
    padding: 20px;

    .avatar {
      border: 1px solid;
    }
    p {
      margin-top: 7px;
      font-size: 13px;
    }
  }

  .sidebox {
    padding: 15px;
  }

  .sidemenuA {
    border-bottom: 1px solid #282828;
    margin-bottom: 15px;
    color: #d9d9d9;
    cursor: pointer;
    .listbox {
      margin-top: -3px;
      display: flex;
      gap: 12px;

      p {
        font-size: 14px;
        color: #d9d9d9;
        .link {
          color: #d9d9d9;
        }
      }
      .logo {
        margin-top: 4px;
      }
    }

    .listbox:active {
      p,
      .logo {
        color: #fbba12;
      }
    }
  }

  .sidemenuB {
    margin-top: 10px;
    display: flex;
    gap: 18px;
    cursor: pointer;
    .logo {
      margin-top: 4px;
    }
  }

  .header {
    padding: 15px;
    background-color: black;
    height: 70px;
    .headerbox {
      display: flex;
      gap: 40px;
      .arrow {
        display: flex;
        gap: 10px;
      }
    }
    .profilehide {
      display: none;
    }
  }

  .input {
    padding: 9px;
    width: 45%;
    background-color: transparent;
  }

  Input:placeholder-shown {
    background-color: transparent;
  }

  .input .ico {
    color: #d9d9d9;
    margin-right: 8px;
  }

  .sideA,
  .sideB {
    height: 41px;
    width: 48px;
    background: #0f0f0f;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background-color: black;
    padding: 10px;
  }

  .contentbox {
    border: 1px solid #282828;
    height: 100%;
  }

  .site-layout {
    margin-left: 200px;
  }

  .footbar {
    height: 55px;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #0f0f0f;
    background-image: url(${logo});
    color: #d9d9d9;
    .box {
      display: flex;
      justify-content: space-between;
      .ioc {
        width: 15%;
      }
    }
  }

  @media screen and (min-width: 769px) {
    .footbar {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .site-layout {
      margin-left: 0px;
    }
    .sidebar {
      display: none;
    }
    .header {
      .headerbox {
        display: none;
      }
      .profilehide {
        display: block;
        .avatar {
          border: 1px solid;
        }
      }
    }
  }
`;
