import React from "react";
import { useSelector } from "react-redux";
import {
  selectFilters,
  selectFiltersFailed,
  selectFiltersLoaded,
  selectFiltersLoading,
} from "./filtersSlice";
import Loading from "../../../Components/Loading";
import { AnimatePresence, motion } from "framer-motion";
import Filter from "./Filter";
import { Parameter } from "../../../Models/Parameter";

function Filters() {
  const loading = useSelector(selectFiltersLoading);
  const hasLoaded = useSelector(selectFiltersLoaded);
  const failedLoading = useSelector(selectFiltersFailed);
  const filters = useSelector(selectFilters);

  return (
    <div className="overflow-x-hidden h-full overflow-y-scroll w-full no-scrollbar dark:text-neutral-50">
      {loading && <Loading />}
      {failedLoading && (
        <div className="text-xl font-bold text-red-500">
          Failed to load filters.
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        {hasLoaded && filters.length > 0 && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {filters.map((filter: Parameter) => (
              <Filter key={filter.id} filter={filter} />
            ))}
          </motion.div>
        )}
        {hasLoaded && filters.length === 0 && (
          <div className="text-xl font-bold text-red-500">
            No filters found.{" "}
            <p className="text-xs text-neutral-950">
              This category might not have any filters or there was an error.
              Please try again later.
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Filters;
