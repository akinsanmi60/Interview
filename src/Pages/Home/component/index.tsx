import React from "react";
import Burna from "../../../assets/burna boy.png";
import Kunle from "../../../assets/adekunle gold.png";
import { ViewWrapper } from "./style";

const ListView = () => {
  return (
    <ViewWrapper>
      <div className="imgbox">
        <div className="imgcard">
          <img src={Burna} alt="burnaboy" />
          <div className="text">
            <p>Daily Vibes 1 </p>
            <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
          </div>
        </div>
        <div className="imgcard">
          <img src={Kunle} alt="adkunle" />
          <div className="text">
            <p>Daily Vibes 2 </p>
            <p>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </p>
          </div>
        </div>
        <div className="imgcard">
          <img src={Burna} alt="burnaboy" />
          <div className="text">
            <p>Daily Vibes 1 </p>
            <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
          </div>
        </div>
        <div className="imgcard">
          <img src={Kunle} alt="adkunle" />
          <div className="text">
            <p>Daily Vibes 2 </p>
            <p>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </p>
          </div>
        </div>
        <div className="imgcard">
          <img src={Burna} alt="burnaboy" />
          <div className="text">
            <p>Daily Vibes 1 </p>
            <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
          </div>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default ListView;
