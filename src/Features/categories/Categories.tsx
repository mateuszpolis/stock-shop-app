import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import {
  addBreadcrumb,
  fetchCategories,
  selectCategories,
  selectCurrentParentId,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  setCurrentParentId,
} from "./categoriesSlice";
import { AnimatePresence, motion } from "framer-motion";
import Category from "../../Components/Category";
import Breadcrumbs from "./Breadcrumbs";

function Categories() {
  const dispatch = useDispatch<AppDispatch>();

  const parentCategory = useSelector(selectCurrentParentId);

  const failedLoading = useSelector(selectFailedLoading);
  const hasLoaded = useSelector(selectHasLoaded);

  useEffect(() => {
    dispatch(fetchCategories(parentCategory));
  }, [dispatch, parentCategory]);

  const categories = useSelector(selectCategories);

  return (
    <div className="overflow-x-hidden h-full overflow-y-scroll w-full no-scrollbar">
      <Breadcrumbs />
      {failedLoading && (
        <div className="text-xl font-bold text-red-500">
          Failed to load categories.
        </div>
      )}
      <AnimatePresence mode="wait">
        {hasLoaded && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                onClick={() => {
                  dispatch(addBreadcrumb(category));
                  dispatch(setCurrentParentId(category.id));
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Categories;
