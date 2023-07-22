import React from "react";
import ReactDOM from "react-dom";
import AddToCart from "./Modal/AddToCart";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Store/store";
import { addProduct } from "../Features/cart/cartSlice";

type Product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

type Props = {
  children: React.ReactNode;
  products: Product[];
};

function AddToCartButton({ children, products }: Props) {
  const dispatch: Dispatch<any> = useAppDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    for (const product of products) {
      dispatch(addProduct(product));
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="w-full"
        onClick={() => {
          if (!showModal) {
            handleShowModal();
          } else {
            handleCloseModal();
          }
        }}
      >
        {children}
      </button>

      {ReactDOM.createPortal(
        <AnimatePresence initial={false} mode="wait">
          {showModal && (
            <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center">
              <AddToCart handleClose={handleCloseModal} products={products} />
            </div>
          )}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default AddToCartButton;
