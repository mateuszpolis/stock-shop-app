import { motion } from "framer-motion";
import React from "react";

function LoadingAnimation() {
  return (
    <motion.div
      className="absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className="material-symbols-outlined animate-spin-slow text-primary text-9xl">
        settings
      </span>
    </motion.div>
  );
}

export default LoadingAnimation;
