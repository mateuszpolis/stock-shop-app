import React, { useEffect } from "react";

type Props = {
  rating: number;
  review_id: number;
};

function StarRating({ rating, review_id }: Props) {
  useEffect(() => {
    const stars = document.getElementsByClassName(`fa-star ${review_id}`);
    for (let i = 0; i < Math.floor(rating); i++) {
      stars[i].classList.add("fa-solid");
      stars[i].classList.remove("fa-regular");
    }
    for (let i = Math.floor(rating); i < 5; i++) {
      stars[i].classList.add("fa-regular");
      stars[i].classList.remove("fa-solid");
    }
  }, [rating, review_id]);

  return (
    <div id={`stars-box-${review_id}`}>
      <i className={`fa-regular fa-star ${review_id} text-yellow-500`}></i>
      <i className={`fa-regular fa-star ${review_id} text-yellow-500`}></i>
      <i className={`fa-regular fa-star ${review_id} text-yellow-500`}></i>
      <i className={`fa-regular fa-star ${review_id} text-yellow-500`}></i>
      <i className={`fa-regular fa-star ${review_id} text-yellow-500`}></i>
    </div>
  );
}

export default StarRating;
