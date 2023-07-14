import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Offers from "../Features/offers/Offers";
import Bestsellers from "../Features/bestsellers/Bestsellers";
import Footer from "../Components/Footer";

export default function Home() {

  useEffect(() => {
    document.title = "StockShop | Home";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900">
      <NavBar />
      <Offers />
      <Bestsellers />
      <Footer />
    </div>
  );
}
