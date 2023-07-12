import React from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { selectSearchTerm } from "./searchBarSlice";
import { updateSearchBar } from "./searchBarSlice";
import { useAppDispatch } from "../../Store/store";
import ButtonDefault from "../../Components/Buttons/ButtonDefault";

export default function SearchBar(): JSX.Element {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch: Dispatch = useAppDispatch();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userInput: string = event.currentTarget.value;
    dispatch(updateSearchBar(userInput));
  };

  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96">
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-950 dark:text-gray-50">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full sm:w-72 md:w-80 lg:w-96 p-4 pl-10 text-base text-gray-950 border-2 border-gray-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-950 focus:border-gray-950 dark:bg-gray-900 dark:border-gray-50 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-gray-50 dark:focus:border-gray-50 transition-all"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
            required
          />
          <ButtonDefault
            type="submit"
            content="Search"
            additionalStyle="absolute right-2.5 bottom-2.5"
          />
        </div>
      </form>
    </div>
  );
}
