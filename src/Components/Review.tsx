import React from "react";
import StarRating from "./StarRating";

type Props = {
  author: string;
  rating: number;
  date: string;
  content: string;
  review_id: number;
  number_of_likes: number;
};

function Review({
  author,
  rating,
  review_id,
  date,
  content,
  number_of_likes,
}: Props) {
  const handleLikeReview = () => {
    const thumb = document.getElementById(`thumb_${review_id}`);
    if (thumb?.classList.contains("fa-regular")) {
      thumb?.classList.add("fa-solid");
      thumb?.classList.remove("fa-regular");
    } else {
      thumb?.classList.add("fa-regular");
      thumb?.classList.remove("fa-solid");
    }
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <h1 className="text-sm font-semibold">{author}</h1>
        <StarRating rating={rating} review_id={review_id} />
        <div>
          <span className="text-xs text-gray-500 dark:text-gray-300">
            {date}
          </span>
        </div>
      </div>
      <div className="p-2">
        <p className="text-sm">{content}</p>
      </div>
      <div onClick={handleLikeReview} className="hover:cursor-pointer">
        <span>
          <i id={`thumb_${review_id}`} className="fa-regular fa-thumbs-up"></i>{" "}
          {number_of_likes}
        </span>
      </div>
    </div>
  );
}

export default Review;
