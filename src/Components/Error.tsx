import { motion } from "framer-motion";
import React from "react";

type Props = {
  error: string;
  onclick: () => void;
};

function Error({error, onclick}: Props) {
  return (
    <motion.div
      className="z-50 fixed top-4 right-4 w-fit h-fit bg-red-500 py-2 px-4 text-2xl font-bold text-red-950 flex flex-row space-x-2 items-center rounded-lg border-4 border-red-700"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div>{error}</div>
      <div className="cursor-pointer" onClick={onclick}>
        <i className="fas fa-times"></i>
      </div>
    </motion.div>
  );
}

export default Error;
