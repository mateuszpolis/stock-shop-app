import React, { useEffect } from "react";
import Review from "../../Components/Review";
import { Review as ReviewModel } from "../../Models/Review";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import {
  loadReviews,
  selectReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
} from "./reviewsSlice";
import Loading from "../../Components/Loading";

function Reviews({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadReviews(id));
  }, [dispatch, id]);

  const isLoading = useSelector(selectReviewsLoading);
  const hasLoaded = useSelector(selectReviewsLoaded);
  const reviews: ReviewModel[] = useSelector(selectReviews);

  const handleToggleReviews = () => {
    const reviews = document.getElementById("reviews");
    const angle = document.getElementById("reviews-angle");
    if (reviews?.classList.contains("block")) {
      reviews?.classList.remove("block");
      reviews?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      reviews?.classList.add("block");
      reviews?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleReviews}
        className="flex items-center hover:cursor-pointer"
      >
        <h1 className="text-xl lg:text-2xl font-semibold">
          Reviews ({reviews.length})
        </h1>{" "}
        <i id="reviews-angle" className="fa-solid fa-angle-down" />
      </div>
      {isLoading && <Loading />}
      {hasLoaded && (
        <div id="reviews" className="relative p-2 hidden">
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;
