import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ScrollUp: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollRemaining, setScrollRemaining] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const remaining =
        document.documentElement.scrollHeight -
        (window.scrollY + document.documentElement.clientHeight);
      setScrollRemaining(remaining);

      if (window.scrollY > 320 && scrollRemaining > 120) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRemaining]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {showButton && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${
              showButton ? "block" : "hidden"
            } fixed bottom-4 right-4 w-12 h-12 z-40 rounded-full bg-neutral-100 shadow-md`}
            onClick={scrollToTop}
          >
            <i className="fas fa-chevron-up text-neutral-900 dark:text-neutral-50"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollUp;
