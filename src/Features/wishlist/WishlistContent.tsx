import React from "react";
import ProductCardWishlist from "../../Components/ProductCardWishlist";
import SideShortcuts from "../../Components/SideShortcuts";
import AddToCartButton from "../../Components/AddToCartButton";
import { useSelector } from "react-redux";
import { selectProducts } from "./wishlistSlice";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

function WishlistContent() {
  const products: product[] = useSelector(selectProducts);

  let addToCartButton;
  if (products.length > 0) {
    addToCartButton = (
      <AddToCartButton
        children={
          <div className="mt-2 w-full bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-lg py-2">
            Add all to cart <i className="fa-solid fa-cart-plus"></i>
          </div>
        }
        products={products}
      />
    );
  } else {
    addToCartButton = (
      <div className="text-center cursor-not-allowed mt-2 w-full bg-green-500 opacity-50 transition-all text-white font-semibold rounded-lg py-2">
        Add all to cart <i className="fa-solid fa-cart-plus"></i>
      </div>
    );
  }

  let productsDiv;
  if (products.length > 0) {
    productsDiv = products.map((product) => (
      <ProductCardWishlist
        key={product.id}
        id={product.id}
        name={product.name}
        producer={product.producer}
        price={product.price}
        price_before={product.price_before}
        img={product.img}
      />
    ));
  } else {
    productsDiv = (
      <div className="flex flex-col justify-center items-center">
        <i className="fa-solid fa-heart-broken text-9xl text-neutral-300"></i>
        <p className="text-2xl text-neutral-300">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="p-5 flex">
      <div className="w-full lg:w-1/2 lg:p-2">
        <div>
          <h1 className="text-2xl font-semibold dark:text-neutral-50">
            Your wishlist <i className="fa-solid fa-heart text-red-600" />{" "}
          </h1>
        </div>
        <div>
          <div className="overflow-y-scroll overscroll-auto max-h-[400px] relative flex flex-col w-full rounded-lg border-y-2 border-neutral-200 dark:border-neutral-500">
            {productsDiv}
          </div>
          <div>{addToCartButton}</div>
        </div>
      </div>
      <SideShortcuts />
    </div>
  );
}

export default WishlistContent;
