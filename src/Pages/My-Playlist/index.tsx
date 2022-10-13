import React from "react";
import NotificationPage from "../../common/CommoPage";

const MyPlayListPage = () => {
  const message = "No playlist available!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default MyPlayListPage;
