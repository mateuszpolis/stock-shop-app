import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AddToList from "./Modal/AddToList";
import RemoveFromList from "./Modal/RemoveFromList";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Store/store";
import { addProduct, removeProduct } from "../Features/wishlist/wishlistSlice";

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

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleShowModal = (modalType: string) => {
    if (modalType === "addToList" && !inList) {
      dispatch(addProduct(product));
    } else {
      dispatch(removeProduct(product.id));
    }

    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const getActiveModalComponent = () => {
    if (activeModal === "addToList" && !inList) {
      return <AddToList handleClose={handleCloseModal} />;
    } else if (activeModal === "removeFromList" && inList) {
      return <RemoveFromList handleClose={handleCloseModal} />;
    }
    return null;
  };

  return (
    <div>
      <button
        className="w-full"
        onClick={() => {
          handleShowModal(inList ? "removeFromList" : "addToList");
        }}
      >
        {children}
      </button>

      {/* {ReactDOM.createPortal(
        <AnimatePresence initial={false} mode="wait">
          {getActiveModalComponent()}
        </AnimatePresence>,
        document.getElementById("notifications-container")!
      )} */}
    </div>
  );
}

export default AddToListButton;
