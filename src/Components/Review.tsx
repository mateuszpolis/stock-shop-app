import React from "react";
import StarRating from "./StarRating";
import { Review as ReviewModel } from "../Models/Review";

function Review({ review }: { review: ReviewModel }) {
  const handleLikeReview = () => {
    const thumb = document.getElementById(`thumb_${review.id}`);
    if (thumb?.classList.contains("fa-regular")) {
      thumb?.classList.add("fa-solid");
      thumb?.classList.remove("fa-regular");
    } else {
      thumb?.classList.add("fa-regular");
      thumb?.classList.remove("fa-solid");
    }
  };

  return (
    <div className="mb-2">
      <div className="flex items-center gap-1">
        <h1 className="text-sm lg:text-base font-semibold">{review.userId}</h1>
        <StarRating rating={review.rating} review_id={review.id} />
        <div>
          <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-300">
            {review.createdTime}
          </span>
        </div>
        {review.ownsProduct && (
          <div>
            <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-300">
              (owns product)
            </span>
          </div>
        )}
      </div>
      <div className="p-2">
        <p className="text-sm lg:text-base">{review.reviewText}</p>
      </div>
      <div onClick={handleLikeReview} className="hover:cursor-pointer">
        <span>
          <i id={`thumb_${review.id}`} className="fa-regular fa-thumbs-up"></i>{" "}
          {review.likes}
        </span>
      </div>
    </div>
  );
}

export default Review;
