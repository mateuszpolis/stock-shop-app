import React, { useEffect } from "react";
import ProductCardCart from "../../Components/ProductCardCart";
import { useSelector } from "react-redux";
import { selectProducts, selectTotalPrice } from "./cartSlice";
import { motion } from "framer-motion";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
  quantity: number;
};

function CartContent() {
  const products: product[] = useSelector(selectProducts);
  const totalAmount: number = useSelector(selectTotalPrice);

  useEffect(() => {}, [products, totalAmount]);

  let productsDiv;
  let checkoutButton;
  if (products.length > 0) {
    productsDiv = products.map((product) => (
      <ProductCardCart
        key={product.id}
        id={product.id}
        name={product.name}
        producer={product.producer}
        price={product.price}
        price_before={product.price_before}
        img={product.img}
        quantity={product.quantity}
      />
    ));
    checkoutButton = (
      <button
        id="checkout"
        className="mt-2 w-full bg-neutral-950 hover:bg-neutral-800 transition-all text-white font-semibold rounded-lg py-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
      >
        Checkout <i className="fa-solid fa-cash-register"></i>
      </button>
    );
  } else {
    productsDiv = (
      <div className="flex flex-col justify-center items-center">
        <i className="fa-solid my-1 fa-cart-shopping text-9xl text-neutral-300"></i>
        <p className="text-2xl text-neutral-300">Your cart is empty</p>
      </div>
    );
    checkoutButton = (
      <button
        id="checkout"
        className="cursor-not-allowed mt-2 w-full bg-neutral-950 opacity-50 transition-all text-white font-semibold rounded-lg py-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
      >
        Checkout <i className="fa-solid fa-cash-register"></i>
      </button>
    );
  }

  return (
    <div className="p-5 flex xl:w-[1280px]">
      <motion.div
        className="w-full p-3 shadow-lg rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <h1 className="text-2xl font-semibold dark:text-neutral-50">
            Your cart <i className="fa-solid fa-cart-shopping text-green-500" />{" "}
          </h1>
        </div>
        <div>
          <div className="overflow-y-scroll overscroll-auto max-h-[400px] relative flex flex-col w-full rounded-lg border-neutral-200 dark:border-neutral-500">
            {productsDiv}
          </div>
          <div>
            <h1
              id="total"
              className="text-2xl font-semibold dark:text-neutral-50"
            >
              Total amount: ${totalAmount}
            </h1>
            {checkoutButton}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CartContent;
