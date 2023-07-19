import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { useNavigate } from "react-router";
import AddToCartProductCard from "../AddToCartProductCard";

type Product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

type Props = {
  handleClose: () => void;
  products: Product[];
};

const dropIn = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 35,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
  },
};

function AddToCart({ handleClose, products }: Props) {
  const navigate = useNavigate();

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-neutral-50 rounded-lg shadow-lg p-4 sm:p-8 md:py-14 flex flex-col items-center w-[90%] max-w-[640px] dark:bg-neutral-900 dark:text-neutral-50"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col w-full space-y-4">
          <div className="flex justify-around items-center">
            <h1 className="text-2xl font-bold font-display sm:text-3xl">
              Added to Cart!
            </h1>
            <i className="fa-solid fa-check-circle text-4xl"></i>
          </div>
          <div className="flex flex-col max-h-32 overflow-y-scroll">
            {products.map((product) => (
              <AddToCartProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                producer={product.producer}
                price_before={product.price_before}
                img={product.img}
              />
            ))}
          </div>
          <div className="flex justify-around items-center">
            <button
              onClick={handleClose}
              className="sm:text-lg bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
            >
              <i className="fa-solid fa-angle-left"></i> Continue Shopping
            </button>
            <button
              onClick={() => {
                handleClose();
                navigate("/cart");
              }}
              className="sm:text-lg bg-neutral-950 hover:bg-neutral-800 text-white rounded-md p-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
            >
              Go to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default AddToCart;
