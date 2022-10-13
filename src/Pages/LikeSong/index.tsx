import React from "react";
import NotificationPage from "../../common/CommoPage";

const LikePage = () => {
  const message = "Kindly select like songs by you!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default LikePage;
