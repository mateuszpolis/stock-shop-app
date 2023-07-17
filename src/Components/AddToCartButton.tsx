import React from "react";
import ReactDOM from "react-dom";
import AddToCart from "./Modal/AddToCart";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function AddToCartButton({children}: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
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
              <AddToCart handleClose={handleCloseModal} text="Added to cart!" />
            </div>
          )}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default AddToCartButton;
