import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import AddToListButton from "./AddToListButton";
import { useSelector } from "react-redux";
import { WishlistState, inWishlist } from "../Features/wishlist/wishlistSlice";
import CategoryXs from "./CategoryXs";
import StarRating from "./StarRating";

type Props = {
  id: number;
  name: string;
  producer: string;
  price: number;
  categories?: string[];
  price_before?: number;
  rating: number;
  img?: string;
};

function ProductCardList({
  id,
  name,
  producer,
  price,
  categories,
  price_before,
  img,
  rating,
}: Props) {
  const inList = useSelector((state: { wishlist: WishlistState }) =>
    inWishlist(state, id)
  );

  let priceInfo;
  if (price_before != null) {
    priceInfo = (
      <span className="line-through text-neutral-400 dark:text-neutral-500">
        ${price_before}
      </span>
    );
  } else {
    priceInfo = "";
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${img ? img : picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="snap-center relative shrink-0 overflow-hidden rounded-lg h-72 sm:h-80 md:h-96 bg-neutral-50  dark:bg-neutral-800 transition-all"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      ></div>
      <Link to={`/product/${id}`}>
        <div className="p-4 absolute top-[50%] translate-y-[-50%] z-10">
          <h1 className="font-bold text-lg sm:text-xl text-neutral-50">
            {name}
          </h1>
          <p className="text-neutral-300 sm:text-lg">{producer}</p>
          <p className="font-bold text-md sm:text-lg text-neutral-50">
            Price: {priceInfo} ${price}
          </p>
          <StarRating rating={rating} review_id={id} />
          <div className="flex justify-normal items-center mt-1">
            {categories?.map((category, index) => (
              <CategoryXs key={index} category={category} />
            ))}
          </div>
        </div>
      </Link>
      <div className="absolute bottom-0 p-4 w-full z-10 flex justify-between items-center text-2xl text-neutral-50">
        <div>
          <Link to={`/product/${id}`}>
            <span className="font-bold text-lg text-neutral-400 hover:text-neutral-50 hover:cursor-pointer transition-all">
              Go to <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </div>
        <div className="flex justify-normal space-x-2">
          <AddToListButton
            children={
              <div>
                {inList ? (
                  <i className="fa-solid fa-heart text-red-600 hover:text-red-500 transition-all"></i>
                ) : (
                  <i className="fa-regular fa-heart hover:text-red-500 transition-all"></i>
                )}
              </div>
            }
            inList={inList}
            product={{
              id: id,
              name: name,
              producer: producer,
              price: price,
              price_before: price_before,
              img: img,
            }}
          />
          <AddToCartButton
            children={
              <i className="fa-solid fa-cart-plus hover:text-green-500 transition-all"></i>
            }
            products={[
              {
                id: id,
                name: name,
                producer: producer,
                price: price,
                price_before: price_before,
                img: img,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCardList;
