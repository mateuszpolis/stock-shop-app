import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Backdrop({ children, onClick }: Props) {
  return (
    <motion.div
      className="fixed z-50 top-0 left-0 h-full w-full backdrop-blur  flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
