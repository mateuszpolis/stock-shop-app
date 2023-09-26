import React from "react";
import FiltersCategoriesMenu from "./FilterCategoriesMenu";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

function FilterCategoriesButton({ children }: Props) {
  const [isFiltersOpen, setIsFiltersOpen] = React.useState<boolean>(false);
  const [showMagnifyingGlass, setShowMagnifyingGlass] =
    React.useState<boolean>(false);

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
              key={"mobile"}
              initial={{ height: 0, y: "100%" }}
              animate={{ height: "100%", y: 0 }}
              exit={{ height: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sm:hidden fixed bottom-0 z-50 left-0 w-full h-full p-5 bg-neutral-50 dark:bg-neutral-900 overscroll-none"
            >
              <div className="flex justify-between">
                <button
                  className="text-neutral-900 dark:text-neutral-50 text-2xl mb-8 hover:cursor-pointer font-bold"
                  onClick={() => {
                    setIsFiltersOpen(false);
                  }}
                >
                  Close <i className="fa-solid fa-times"></i>
                </button>
                <button
                  className="text-neutral-950 p-2 rounded-lg text-2xl mb-8 cursor-pointer font-bold transition-all"
                  onMouseEnter={() => {
                    setShowMagnifyingGlass(true);
                  }}
                  onMouseLeave={() => {
                    setShowMagnifyingGlass(false);
                  }}
                >
                  Search{" "}
                </button>
              </div>

              <FiltersCategoriesMenu />
            </motion.div>
          )}
          {isFiltersOpen && (
            <div
              className="sm:fixed z-50 top-0 left-0 h-full w-full backdrop-blur flex justify-end"
              onClick={() => setIsFiltersOpen(false)}
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                key={"sm"}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="shadow-lg hidden sm:block z-50 left-0 w-[400px] xl:w-[30%] h-full p-5 bg-neutral-50 dark:bg-neutral-900 overscroll-none"
              >
                <button
                  className="text-neutral-900 dark:text-neutral-50 text-2xl mb-8 hover:cursor-pointer font-bold"
                  onClick={() => {
                    setIsFiltersOpen(false);
                  }}
                >
                  Close <i className="fa-solid fa-times"></i>
                </button>

                <FiltersCategoriesMenu />
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.getElementById("root")!
      )}
    </div>
  );
}

export default FilterCategoriesButton;
