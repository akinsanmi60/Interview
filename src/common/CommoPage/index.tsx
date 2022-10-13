import React from "react";
import { NotyWrapper } from "./style";
import NoData from "../../assets/Nodata.png";

type NotyProp = {
  message: string;
};

const NotificationPage = ({ message }: NotyProp) => {
  return (
    <NotyWrapper>
      <div className="box">
        <div className="img">
          <img src={NoData} alt="No Data" />
        </div>
        <p>{message}</p>
      </div>
    </NotyWrapper>
  );
};

export default NotificationPage;
