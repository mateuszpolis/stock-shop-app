import React, { useEffect } from "react";
import ProfileContent from "../Features/profile/ProfileContent";

function Profile() {
  useEffect(() => {
    document.title = "StockShop | Profile";
  }, []);

  return <ProfileContent />;
}

export default Profile;
