import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AddToList from "./Modal/AddToList";
import RemoveFromList from "./Modal/RemoveFromList";

type Props = {
  children: React.ReactNode;
  inList: boolean;
};

function AddToCartButton({ children, inList }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  let modal;
  if (!inList) {
    modal = <AddToList handleClose={handleCloseModal} />;
  } else {
    modal = <RemoveFromList handleClose={handleCloseModal} />;
  }

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
            <div className="fixed z-50 top-6 right-6 w-fit h-fit">{modal}</div>
          )}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default AddToCartButton;
