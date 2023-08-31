import React, { useEffect } from "react";

type Props = {
  rating: number;
};

function StarRating({ rating }: Props) {
  const starsFull = [];
  const starsEmpty = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsFull.push(
        <i key={i} className={`fa-solid fa-star text-yellow-500`}></i>
      );
    } else {
      starsEmpty.push(
        <i key={i} className={`fa-regular fa-star text-yellow-500`}></i>
      );
    }
  }

  return (
    <div>
      {starsFull}
      {starsEmpty}
    </div>
  );
}

export default StarRating;
