import React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import AddToList from "./Modal/AddToList";
import RemoveFromList from "./Modal/RemoveFromList";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Store/store";
import { addProduct, removeProduct } from "../Features/wishlist/wishlistSlice";
import { bool, boolean } from "yup";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

type Props = {
  children: React.ReactNode;
  inList: boolean;
  product: product;
};

function AddToListButton({ children, inList, product }: Props) {
  const dispatch: Dispatch<any> = useAppDispatch();

  const [showModal, setShowModal] = useState([false, false]);

  const handleShowModal = () => {
    if (!inList) {
      setShowModal([true, true]);
      dispatch(addProduct(product));
    } else {
      setShowModal([true, false]);
      dispatch(removeProduct(product.id));
    }
  };

  const handleCloseModal = () => {
    setShowModal([false, false]);
  };

  const getActiveModalComponent = () => {
    if (showModal[0] && showModal[1]) {
      return <AddToList handleClose={handleCloseModal} />;
    } else if (showModal[0] && !showModal[1]) {
      return <RemoveFromList handleClose={handleCloseModal} />;
    }
    return null;
  };

  return (
    <div>
      <button
        className="w-full"
        onClick={() => {
          handleShowModal();
        }}
      >
        {children}
      </button>

      {ReactDOM.createPortal(
        <AnimatePresence initial={false} mode="wait">
          {showModal && getActiveModalComponent()}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default AddToListButton;
