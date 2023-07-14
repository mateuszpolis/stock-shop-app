import React from "react";
import Review from "../../Components/Review";

function Reviews() {
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
          Reviews{" "}
          <span className="text-base font-base text-gray-500 dark:text-gray-300">
            (25)
          </span>
        </h1>{" "}
        <i id="reviews-angle" className="fa-solid fa-angle-down" />
      </div>
      <div id="reviews" className="p-2 hidden">
        <Review
          author="John Doe"
          rating={4.5}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia voluptate quod quos"
          review_id={1}
          date="2021-09-01"
          number_of_likes={0}
        />
        <Review
          author="John Doe"
          rating={3.5}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia voluptate quod quos"
          review_id={2}
          date="2022-09-01"
          number_of_likes={2}
        />
      </div>
    </div>
  );
}

export default Reviews;
