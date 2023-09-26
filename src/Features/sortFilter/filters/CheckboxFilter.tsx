import React from "react";
import { Option } from "../../../Models/Option";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import {
  addFilterChoice,
  removeFilterChoice,
  selectChoicesForFilter,
  selectFilterChoices,
} from "./filtersSlice";
import {
  selectSearchParams,
  setSearchParams,
} from "../../searchResults/searchResultsSlice";
import { useLocation, useNavigate } from "react-router";
import { fork } from "child_process";
import { FilterChoices } from "../../../Models/Parameter";

function CheckboxFilter({ options }: { options: Option[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  const parameterId = options[0].ParameterId;
  const filterChoicesForParameter = useSelector((state: any) =>
    selectChoicesForFilter(state, parameterId)
  )?.choicesIds;

  let filterChoices: FilterChoices[] = useSelector(selectFilterChoices);

  const searchParams = useSelector(selectSearchParams);
  const limit = searchParams.limit;
  const searchQuery = searchParams.searchQuery;
  const sorting = searchParams.sorting;
  const category = searchParams.category;

  const handleCheckboxChange = (choiceId: number, isChecked: boolean) => {
    let updatedFilterChoices = [...filterChoices]; // Create a new array to avoid mutating state

    const filterChoiceIndex = updatedFilterChoices.findIndex(
      (filterChoice) => filterChoice.parameterId === parameterId
    );

    if (isChecked) {
      dispatch(addFilterChoice({ parameterId, choiceId }));

      if (filterChoiceIndex !== -1) {
        updatedFilterChoices[filterChoiceIndex].choicesIds.push(choiceId);
      } else {
        updatedFilterChoices.push({
          parameterId,
          choicesIds: [choiceId],
        });
      }
    } else {
      dispatch(removeFilterChoice({ parameterId, choiceId }));

      if (filterChoiceIndex !== -1) {
        const index =
          updatedFilterChoices[filterChoiceIndex].choicesIds.indexOf(choiceId);
        if (index !== -1) {
          updatedFilterChoices[filterChoiceIndex].choicesIds.splice(index, 1);
        }
      }
    }

    const queryOptions = {
      searchQuery: encodeURIComponent(searchQuery),
      limit: encodeURIComponent(limit),
      category: encodeURIComponent(category),
      sorting: encodeURIComponent(sorting),
      filters: encodeURIComponent(JSON.stringify(updatedFilterChoices)),
    };
    const queryString = new URLSearchParams(queryOptions).toString();
    if (location.pathname.startsWith("/search")) {
      navigate(`/search?${queryString}`);
    }
    dispatch(setSearchParams({ filters: updatedFilterChoices }));
  };

  return (
    <div className="px-4">
      {options == null && <div>Failed to load options.</div>}
      {options != null &&
        options.length !== 0 &&
        options.map((option, index) => (
          <div
            className="flex flex-row items-center dark:text-neutral-50"
            key={index}
          >
            <input
              type="checkbox"
              name={option.Name ? option.Name : "undefined"}
              id={option.Id.toString()}
              className="mr-2"
              checked={filterChoicesForParameter?.includes(option.Id) || false}
              onChange={(e) => {
                const isChecked = e.target.checked;
                handleCheckboxChange(option.Id, isChecked);
              }}
            />
            <label className="" htmlFor={option.Name?.toString()}>
              {option.Name}
            </label>
          </div>
        ))}
    </div>
  );
}

export default CheckboxFilter;
