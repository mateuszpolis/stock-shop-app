import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProfileContent from "../Features/profile/ProfileContent";

function Profile() {
  useEffect(() => {
    document.title = "StockShop | Profile";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col xl:items-center min-h-screen">
      <NavBar />
      <ProfileContent />
      <Footer />
    </div>
  );
}

export default Profile;
