import React from "react";
import NotificationPage from "../../common/CommoPage";

const LibraryPage = () => {
  const message = "No collection!";
  return (
    <div style={{ height: "100vh" }}>
      <NotificationPage message={message} />
    </div>
  );
};

export default LibraryPage;
