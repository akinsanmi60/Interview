import React from "react";
import NotificationPage from "../../common/CommoPage";

const RecentPage = () => {
  const message = "You haven't visited any page yet!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default RecentPage;
