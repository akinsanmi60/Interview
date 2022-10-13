import React from "react";
import NotificationPage from "../../common/CommoPage";

const PlaylistPage = () => {
  const message = "You haven't create playlist!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default PlaylistPage;
