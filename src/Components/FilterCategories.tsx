import React from "react";
import FiltersCategoriesSide from "./FiltersCategoriesSide";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

function FilterCategories({ children }: Props) {
  const [isFiltersOpen, setIsFiltersOpen] = React.useState<boolean>(false);

  return (
    <div>
      <div
        className="text-center flex flex-col cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsFiltersOpen(!isFiltersOpen);
        }}
      >
        {children}
      </div>
      {ReactDOM.createPortal(
        <AnimatePresence initial={false}>
          {isFiltersOpen && (
            <motion.div
              key={"sm"}
              initial={{ height: 0, y: "100%" }}
              animate={{ height: "100%", y: 0 }}
              exit={{ height: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed bottom-0 z-50 left-0 w-full h-full p-5 bg-neutral-50 dark:bg-neutral-900 overscroll-none"
            >
              <button
                className="text-neutral-900 dark:text-neutral-50 text-2xl mb-8 hover:cursor-pointer font-bold"
                onClick={() => {
                  setIsFiltersOpen(false);
                }}
              >
                Close <i className="fa-solid fa-times"></i>
              </button>

              <FiltersCategoriesSide />
            </motion.div>
          )}
          {isFiltersOpen && (
            <div
              className="lg:fixed z-50 top-0 left-0 h-full w-full backdrop-blur flex justify-center items-center"
              onClick={() => setIsFiltersOpen(false)}
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                key={"lg"}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden lg:block rounded-lg z-50 left-0 w-[60%] h-[60%] p-5 bg-neutral-50 dark:bg-neutral-900 overscroll-none"
              >
                <button
                  className="text-neutral-900 dark:text-neutral-50 text-2xl mb-8 hover:cursor-pointer font-bold"
                  onClick={() => {
                    setIsFiltersOpen(false);
                  }}
                >
                  Close <i className="fa-solid fa-times"></i>
                </button>

                <FiltersCategoriesSide />
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default FilterCategories;
