import React from "react";

interface StarRatingProps {
  onStarClick: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onStarClick }) => {
  const [rating, setRating] = React.useState<number>(0);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const starId = event.currentTarget.id;
    const starNumber = parseInt(starId[starId.length - 1]);
    const starRate1 = document.getElementById("star_rate_1");
    const starRate2 = document.getElementById("star_rate_2");
    const starRate3 = document.getElementById("star_rate_3");
    const starRate4 = document.getElementById("star_rate_4");
    const starRate5 = document.getElementById("star_rate_5");
    const stars = [starRate1, starRate2, starRate3, starRate4, starRate5];
    stars.forEach((star, index) => {
      if (index < starNumber) {
        star?.classList.remove("fa-regular");
        star?.classList.add("fa-solid");
      } else {
        star?.classList.remove("fa-solid");
        star?.classList.add("fa-regular");
      }
    });
  };

  const handleMouseLeave = () => {
    const starRate1 = document.getElementById("star_rate_1");
    const starRate2 = document.getElementById("star_rate_2");
    const starRate3 = document.getElementById("star_rate_3");
    const starRate4 = document.getElementById("star_rate_4");
    const starRate5 = document.getElementById("star_rate_5");
    const stars = [starRate1, starRate2, starRate3, starRate4, starRate5];
    stars.forEach((star, index) => {
      if (index < rating) {
        star?.classList.remove("fa-regular");
        star?.classList.add("fa-solid");
      } else {
        star?.classList.remove("fa-solid");
        star?.classList.add("fa-regular");
      }
    });
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const starId = event.currentTarget.id;
    const starNumber = parseInt(starId[starId.length - 1]);
    setRating(starNumber);
    onStarClick(starNumber);
  };

  return (
    <div className="flex space-x-2 text-xl">
      <h1 className="font-bold">Rate the product: </h1>
      <div>
        <i
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          id="star_rate_1"
          className="cursor-pointer fa-regular fa-star text-yellow-500"
        ></i>
        <i
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          id="star_rate_2"
          className="cursor-pointer fa-regular fa-star text-yellow-500"
        ></i>
        <i
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          id="star_rate_3"
          className="cursor-pointer fa-regular fa-star text-yellow-500"
        ></i>
        <i
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          id="star_rate_4"
          className="cursor-pointer fa-regular fa-star text-yellow-500"
        ></i>
        <i
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          id="star_rate_5"
          className="cursor-pointer fa-regular fa-star text-yellow-500"
        ></i>
      </div>
    </div>
  );
};

export default StarRating;
