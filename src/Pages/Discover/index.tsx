import React from "react";
import NotificationPage from "../../common/CommoPage";

const DiscoverPage = () => {
  const message = "No Discovery made yet!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default DiscoverPage;
