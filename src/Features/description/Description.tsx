import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Description({ description }: { description: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const handleToggleDescription = () => {
    const angle = document.getElementById("description-angle");
    if (isDropdownOpen) {
      angle?.classList.remove("rotate-180");
      setIsDropdownOpen(false);
    } else {
      angle?.classList.add("rotate-180");
      setIsDropdownOpen(true);
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleDescription}
        className="relative flex items-center hover:cursor-pointer"
      >
        <h1 className="text-xl lg:text-2xl font-semibold">Description</h1>{" "}
        <i
          id="description-angle"
          className="fa-solid fa-angle-down transition-all"
        />
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "200px" }}
            exit={{ maxHeight: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-2"
          >
            <p className="text-sm lg:text-base">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Description;
