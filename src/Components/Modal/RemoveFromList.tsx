import React from "react";
import { motion } from "framer-motion";

type Props = {
  handleClose: () => void;
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
    x: "100vw",
  },
};

function RemoveFromList({ handleClose }: Props) {
  const close = setTimeout(() => {
    handleClose();
  }, 4000);

  function handleRemoveFromList() {
    clearTimeout(close);
    handleClose();
  }

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="bg-neutral-50 rounded-lg p-4 shadow-lg dark:bg-neutral-800 dark:text-neutral-50"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <i className="fa-solid fa-heart-broken"></i> Removed from List
        </h1>
        <button
          onClick={handleRemoveFromList}
          className="p-2  transition-all"
        >
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
    </motion.div>
  );
}

export default RemoveFromList;
