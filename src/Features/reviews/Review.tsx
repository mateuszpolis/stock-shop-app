import React, { useEffect } from "react";
import StarRating from "../../Components/StarRating";
import { Review as ReviewModel } from "../../Models/Review";
import { DateTimeFormatOptions } from "intl";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../login/loginSlice";
import { AppDispatch } from "../../Store/store";
import { likeReview } from "./reviewsSlice";

function Review({ review }: { review: ReviewModel }) {
  const dispatch = useDispatch<AppDispatch>();

  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(review.likes);

  const userId = useSelector(selectUserId);

  const handleLikeReview = () => {
    const thumb = document.getElementById(`thumb_${review.id}`);
    if (liked) {
      setLikes(likes - 1);
      thumb?.classList.add("fa-regular");
      thumb?.classList.remove("fa-solid");
    } else {
      setLikes(likes + 1);
      dispatch(likeReview({ userId: userId, reviewId: review.id }));
      thumb?.classList.add("fa-solid");
      thumb?.classList.remove("fa-regular");
    }
    setLiked(!liked);
  };

  const createdTime = new Date(review.createdTime);
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = createdTime.toLocaleDateString("en-US", options);

  return (
    <div className="mb-2">
      <div className="flex flex-col">
        <StarRating rating={review.rating} />
        <h3 className="text-base font-semibold">
          {review.userFirstName} {review.userLastName}
          {review.ownsProduct && (
            <span className="text-neutral-500 text-xs">
              {" "}
              (<i className="fa-regular fa-circle-check"></i> verified owner)
            </span>
          )}
        </h3>
        <h3 className="text-xs text-gray-500 dark:text-gray-300">
          {formattedDate}
        </h3>
      </div>
      <div className="p-2">
        <p className="text-sm lg:text-base whitespace-normal break-words">
          {review.reviewText}
        </p>
      </div>
      <div onClick={handleLikeReview} className="hover:cursor-pointer">
        <span>
          <i id={`thumb_${review.id}`} className="fa-regular fa-thumbs-up"></i>{" "}
          {likes}
        </span>
      </div>
    </div>
  );
}

export default Review;
