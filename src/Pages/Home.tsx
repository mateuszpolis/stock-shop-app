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
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col min-h-screen">
      <NavBar />
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px]">
          <div className="p-5">
            <div className="p-8 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-950 rounded-lg shadow-md transition-all">
              <h2 className="text-4xl font-bold mb-4 text-neutral-50 dark:text-neutral-950">
                Welcome to Our Online Store!
              </h2>
              <ul className="mt-4 text-neutral-50 dark:text-neutral-950">
                <li>
                  Free Shipping on all orders{" "}
                  <i className="fa-solid fa-truck text-xl"></i>
                </li>
                <li>
                  30-day money-back guarantee{" "}
                  <i className="fa-solid fa-hand-holding-dollar text-xl"></i>
                </li>
                <li>
                  24/7 Customer Support{" "}
                  <i className="fa-solid fa-headset text-xl"></i>
                </li>
              </ul>
              <button className="mt-4 bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all">
                Browse Products
              </button>
            </div>
          </div>
          <Offers />
          <div className="p-5">
            <div className="bg-neutral-900 dark:bg-neutral-50 p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-neutral-50 dark:text-neutral-950">
                Discover Amazing Deals!
              </h2>
              <p className="text-lg text-neutral-50 dark:text-neutral-950">
                Check out our wide range of products at unbeatable prices. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul className="mt-4 text-neutral-50 dark:text-neutral-950">
                <li>Free Shipping on all orders</li>
                <li>30-day money-back guarantee</li>
                <li>24/7 Customer Support</li>
              </ul>
              <button className="mt-4 bg-white text-teal-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all">
                Browse Products
              </button>
            </div>
          </div>
          <Bestsellers />
        </div>
      </div>

      <Footer />
    </div>
  );
}
