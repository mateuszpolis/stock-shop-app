import React, { useEffect } from "react";
import Gallery from "../../Components/Gallery";
import StarRating from "../../Components/StarRating";
import Reviews from "../reviews/Reviews";
import Description from "../description/Description";
import Specification from "../specification/Specification";
import AddToCartButton from "../../Components/AddToCartButton";
import AddToListButton from "../../Components/AddToListButton";
import { useDispatch, useSelector } from "react-redux";
import { WishlistState, inWishlist } from "../wishlist/wishlistSlice";
import { motion } from "framer-motion";
import { AppDispatch } from "../../Store/store";
import {
  loadProduct,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  selectProduct,
} from "./productInfoSlice";
import { number } from "yup";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  priceHistory: number[];
  discount: number;
  stockQuantity: number;
  categories: string[];
  images: string[];
  reviews: string[];
  available: boolean;
  createdTime: string;
  updatedTime: string;
  weight: number;
  dimensions: string;
  rating: number;
};

function ProductInfo({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadProduct(id));
    document.title = "StockShop | Product";
  }, [dispatch, id]);

  const product: Product = useSelector(selectProduct);
  const isLoading = useSelector(selectIsLoading);
  const failedLoading = useSelector(selectFailedLoading);
  const hasLoaded = useSelector(selectHasLoaded);

  useEffect(() => {
    if (hasLoaded) {
      document.title = `StockShop | ${product.name}`;
    }
  }, [hasLoaded, product]);

  const inList = useSelector((state: { wishlist: WishlistState }) =>
    inWishlist(state, id)
  );

  useEffect(() => {
    document.title = "StockShop | Product";
  }, [inList]);

  return (
    <motion.div
      className="p-5 pt-1 flex flex-col w-full xl:w-[1280px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="lg:grid lg:grid-cols-2">
        <Gallery images={product.images} />
        <div className="lg:mt-24 lg:flex lg:items-center lg:flex-col lg:text-xl">
          <div className="grid grid-cols-3 lg:w-full mt-2 dark:text-neutral-50">
            <div className="text-center border-e-2 flex flex-col">
              <i className="fa-solid fa-circle-check"></i>
              <p className="text-xs">In stock</p>
            </div>
            <div className="text-center border-e-2 flex flex-col">
              <i className="fa-solid fa-truck"></i>
              <p className="text-xs">Shipping from: $0</p>
            </div>
            <div className="text-center flex flex-col">
              <i className="fa-solid fa-clock"></i>
              <p className="text-xs">Delivery: 24h</p>
            </div>
          </div>
          <div className="lg:p-10">
            <div className="flex flex-col gap-y-2 mt-3 justify-center items-start flex-wrap dark:text-neutral-50">
              <div className="flex justify-normal items-center">
                <StarRating rating={product.rating} review_id={0} />
                <a
                  href="#reviews"
                  className="font-mono underline text-xs text-gray-500 dark:text-gray-300 hover:no-underline"
                >
                  ({product?.reviews?.length} reviews)
                </a>
              </div>
              <div className="mr-2">
                <h2 className="text-xl font-semibold">{product.name}</h2>
              </div>
              <h1 className="mt-">
                Price:{" "}
                <span className="text-xl font-semibold">${product.price}</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-around mt-2 items-center lg:w-full">
            <AddToListButton
              children={
                <div className="p-5 group bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                  Add to list{" "}
                  {inList ? (
                    <i className="fa-solid fa-heart text-red-600 hover:text-red-500 transition-all"></i>
                  ) : (
                    <i className="fa-regular fa-heart hover:text-red-500 transition-all"></i>
                  )}
                </div>
              }
              inList={inList}
              product={{
                id: 1,
                name: "iPhone 14Pro",
                producer: "Apple",
                price: 999,
              }}
            />
            <AddToCartButton
              children={
                <button className="p-5 group bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                  Add to cart{" "}
                  <i
                    id="product-card-cart"
                    className="fa-solid fa-cart-plus group-hover:text-green-500 transition-all"
                  ></i>
                </button>
              }
              products={[
                { id: 1, name: "iPhone 14Pro", producer: "Apple", price: 999 },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 dark:text-neutral-50">
        <Description />
        <Specification />
        <Reviews />
      </div>
    </motion.div>
  );
}

export default ProductInfo;
