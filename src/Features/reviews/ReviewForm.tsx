import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import {
  loadReviews,
  resetReviews,
  selectReviewAddFailed,
  selectReviewAdded,
  selectReviewAdding,
} from "./reviewsSlice";
import { selectLoggedIn } from "../login/loginSlice";
import { useNavigate } from "react-router";

interface ReviewFormProps {
  onSubmit: (rating: number, reviewText: string) => void;
  productId: number;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit, productId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [rating, setRating] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [ratingSelected, setRatingSelected] = useState(false);
  const maxReviewLength = 250;

  const isAdding = useSelector(selectReviewAdding);
  const hasAdded = useSelector(selectReviewAdded);
  const failed = useSelector(selectReviewAddFailed);
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    if (hasAdded) {
      setRating(null);
      setReviewText("");
      setRatingSelected(false);
      setTimeout(() => {
        setShowForm(false);
        dispatch(resetReviews());
        dispatch(loadReviews(productId));
      }, 3000);
    }
  }, [hasAdded, dispatch, productId]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setRatingSelected(newRating > 0);
  };

  const handleReviewTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;
    if (newText.length <= maxReviewLength) {
      setReviewText(newText);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!ratingSelected) {
      alert("Please select a rating");
      return;
    } else if (reviewText.trim() === "") {
      alert("Please enter a review");
      return;
    }
    if (rating !== null && reviewText.trim() !== "") {
      onSubmit(rating, reviewText);
    }
  };

  return (
    <div>
      {showForm && hasAdded && isLoggedIn && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center rounded-md p-2 shadow-md mb-2">
            <h3 className="text-xl font-semibold">
              {" "}
              Review added <i className="fa-regular fa-circle-check"></i>
            </h3>
            <p className="text-base  lg:text-base whitespace-normal break-words">
              Thank you for your review!
            </p>
          </div>
        </motion.div>
      )}
      {showForm && failed && isLoggedIn && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center rounded-md p-2 shadow-md mb-2">
            <h3 className="text-xl font-semibold">
              {" "}
              Failed to add review{" "}
              <i className="fa-regular fa-circle-xmark"></i>
            </h3>
            <p className="text-base  lg:text-base whitespace-normal break-words">
              Please try again later
            </p>
          </div>
        </motion.div>
      )}
      {showForm && !hasAdded && isLoggedIn && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {isAdding && <Loading />}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <StarRating onStarClick={handleRatingChange} />
            <div className="flex flex-col">
              <textarea
                className="resize-none appearance-none block w-full p-3 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50  transition-all"
                value={reviewText}
                onChange={handleReviewTextChange}
                maxLength={maxReviewLength}
                rows={4}
                placeholder="Write your review here..."
                required={true}
              />
              <p>
                {reviewText.length}/{maxReviewLength} characters
              </p>
            </div>
            <div className="flex justify-between space-x-2 my-2">
              <button
                className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-grow bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
              >
                Save
              </button>
            </div>
          </form>
        </motion.div>
      )}
      {!showForm && isLoggedIn && (
        <motion.div
          className="flex justify-between space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="my-2 w-full bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
            onClick={() => setShowForm(!showForm)}
          >
            Add Review
          </button>
        </motion.div>
      )}
      {!isLoggedIn && (
        <motion.div
          className="flex justify-between space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="my-2 w-full bg-white text-neutral-950 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-neutral-950 hover:text-white transition-all"
            onClick={() => navigate("/login")}
          >
            Login in to add a review <i className="fa-solid fa-sign-in"></i>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewForm;
