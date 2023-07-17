import React from "react";
import ProductCardWishlist from "../../Components/ProductCardWishlist";

function WishlistContent() {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-2xl font-semibold">
          Your wishlist <i className="fa-solid fa-heart text-red-600" />{" "}
        </h1>
      </div>
      <div>
        <div className="overflow-y-scroll overscroll-auto max-h-[400px] relative flex flex-col w-full rounded-lg border-y-2 border-neutral-200">
          <ProductCardWishlist 
            id={1}
            name="iPhone 14 Pro"
            producer="Apple"
            price={999}
            price_before={1299}
          />
        </div>
        <div>
          <button className="mt-2 w-full bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-lg py-2">
            Add all to cart <i className="fa-solid fa-cart-plus"></i>
          </button> 
        </div>
      </div>
    </div>
  );
}

export default WishlistContent;
