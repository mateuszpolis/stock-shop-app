import React, { useEffect } from "react";
import Review from "./Review";
import { ReviewCreate, Review as ReviewModel } from "../../Models/Review";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import {
  addReview,
  loadReviews,
  selectReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
} from "./reviewsSlice";
import ReviewForm from "./ReviewForm";
import { selectUserId } from "../login/loginSlice";
import { motion } from "framer-motion";

function Reviews({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadReviews(id));
  }, [dispatch, id]);

  const [showReviews, setShowReviews] = React.useState(false);

  const isLoading = useSelector(selectReviewsLoading);
  const hasLoaded = useSelector(selectReviewsLoaded);
  const reviews: ReviewModel[] = useSelector(selectReviews);
  const userId = useSelector(selectUserId);

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    const angle = document.getElementById("reviews-angle");
    if (!showReviews) {
      angle?.classList.add("rotate-180");
    } else {
      angle?.classList.remove("rotate-180");
    }
  };

  return (
    <div id="reviews">
      <div
        onClick={handleToggleReviews}
        className="flex items-center hover:cursor-pointer"
      >
        <h1 className="text-xl lg:text-2xl font-semibold">
          Reviews ({reviews.length})
        </h1>{" "}
        <i
          id="reviews-angle"
          className="fa-solid fa-angle-down transition-all"
        />
      </div>
      {showReviews && (
        <div className="relative p-2">
          <ReviewForm
            onSubmit={(rating: number, reviewText: string) => {
              const newReview: ReviewCreate = {
                productId: id,
                userId: userId,
                rating: rating,
                reviewText: reviewText,
              };
              dispatch(addReview(newReview));
            }}
            productId={id}
          />
          {isLoading && <div>Loading reviews...</div>}
          {hasLoaded && reviews.length === 0 && (
            <div className="font-semibold">
              No reviews yet. Be the first to review this product!
            </div>
          )}
          {hasLoaded && reviews.length > 0 && (
            <motion.div
              className="max-h-96 overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

export default Reviews;
