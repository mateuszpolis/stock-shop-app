import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBreadcrumbs, selectBreadcrumbs } from "./categoriesSlice";
import { AppDispatch } from "../../Store/store";

function Breadcrumbs() {
  const dispatch = useDispatch<AppDispatch>();

  const breadcrumbs = useSelector(selectBreadcrumbs);

  return (
    <div className="flex flex-row space-x-1 flex-wrap">
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={breadcrumb.id}
          onClick={() => {
            dispatch(removeBreadcrumbs({ id: breadcrumb.id }));
          }}
          className={`text-xl font-bold cursor-pointer ${
            index === breadcrumbs.length - 1 ? "underline" : ""
          }`}
        >
          {breadcrumb.name}{" "}
          <i
            className={`fas fa-chevron-right ${
              index === breadcrumbs.length - 1 ? "hidden" : ""
            }`}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumbs;
