import React from "react";
import BackLogo from "../../assets/backG.png";
import ListView from "./component";

import { HomeWrapper } from "./style";

const HomePage = () => {
  return (
    <HomeWrapper>
      <img src={BackLogo} alt="" className="logoimg" />
      <h1>Welcome Back!</h1>
      <div>
        <ListView />
        <h3>Cheers to the Weekend </h3>
        <ListView />
      </div>
    </HomeWrapper>
  );
};

export default HomePage;
