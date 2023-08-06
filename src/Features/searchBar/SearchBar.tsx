import React from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { selectSearchTerm } from "./searchBarSlice";
import { updateSearchBar } from "./searchBarSlice";
import { useAppDispatch } from "../../Store/store";
import ButtonDefault from "../../Components/Buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";

export default function SearchBar(): JSX.Element {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch: Dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userInput: string = event.currentTarget.value;
    dispatch(updateSearchBar(userInput));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = encodeURIComponent(searchTerm ? searchTerm : " ");
    const categories = encodeURIComponent(" "); // Replace with your desired default value or remove this line if empty is fine.
    const sorting = encodeURIComponent(""); // Replace with your desired default value or remove this line if empty is fine.
    const url = `/search/${searchQuery}/${categories}/${sorting}`;
    navigate(url);
  };

  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-950 dark:text-neutral-50">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            id="default-search"
            className="shadow-md appearance-none block w-full sm:w-72 md:w-80 lg:w-96 p-4 pl-10 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50 dark:focus:border-neutral-50 transition-all"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
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
