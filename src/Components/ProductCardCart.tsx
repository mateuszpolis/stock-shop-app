import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";
import AddToListButton from "./AddToListButton";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Store/store";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "../Features/cart/cartSlice";
import { useSelector } from "react-redux";
import { WishlistState, inWishlist } from "../Features/wishlist/wishlistSlice";

type Props = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
  quantity: number;
};

function ProductCardCart({
  id,
  name,
  producer,
  price,
  price_before,
  img,
  quantity,
}: Props) {
  const dispatch: Dispatch = useAppDispatch();

  const inList = useSelector((state: { wishlist: WishlistState }) =>
    inWishlist(state, id)
  );

  let priceP;
  if (price_before != null) {
    priceP = (
      <p className="text-neutral-500 text-sm dark:text-neutral-300">
        Price:{" "}
        <span className="line-through text-neutral-400">${price_before}</span> $
        {price}
      </p>
    );
  } else {
    priceP = (
      <p className="text-neutral-500 text-sm dark:text-neutral-300">
        Price: ${price}
      </p>
    );
  }

  const handleDecrement = (e: any) => {
    e.preventDefault();
    dispatch(decrementProduct({ id: id, price: price }));
  };

  const handleIncrement = (e: any) => {
    e.preventDefault();
    dispatch(incrementProduct({ id: id, price: price }));
  };

  return (
    <div className="w-full p-2 grid grid-cols-3 items-center rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <div className="h-24">
        <Link to={`/product/${id}`}>
          <img
            alt={name}
            src={img ? img : picture}
            className="h-full rounded-lg aspect-square object-cover object-center"
          />
        </Link>
      </div>
      <Link to={`/product/${id}`}>
        <div>
          <h1 className="font-bold text-lg dark:text-neutral-50">{name}</h1>
          <p className="text-neutral-500 text-sm dark:text-neutral-300">
            {producer}
          </p>
          {priceP}
        </div>
      </Link>
      <div className="flex justify-around items-center">
        <div className="text-xl flex flex-row justify-center items-center space-x-1">
          <button
            onClick={handleDecrement}
            className="text-neutral-500 dark:text-neutral-50 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <i id={`decrement-${id}`} className="fa-solid fa-minus"></i>
          </button>
          <p
            id={`product-count-${id}`}
            className="text-neutral-500 dark:text-neutral-50"
          >
            {quantity}
          </p>
          <button
            onClick={handleIncrement}
            className="text-neutral-500 dark:text-neutral-50 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <i id={`increment-${id}`} className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 justify-center items-center text-2xl dark:text-neutral-50">
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
          <button
            onClick={() => {
              console.log("remove product");
              dispatch(removeProduct({ id: id, price: price }));
            }}
          >
            <i className="fa-solid fa-trash hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCart;
