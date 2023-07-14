import React from "react";

type Props = {
  images: string[];
};

function Gallery({ images }: Props) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="group w-full h-60 sm:h-80 md:h-96  md:mt-10 rounded-lg overflow-hidden bg-gray-200 relative transition-all">
      <div
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div
        onClick={previousImage}
        className="transition-all hidden group-hover:block rounded-2xl hover:cursor-pointer hover:opacity-100 active:opacity-100 opacity-50 px-3 py-1 bg-gray-200 text-3xl absolute left-3 top-[50%] -translate-x-0 translate-y-[-50%]"
      >
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div
        onClick={nextImage}
        className="transition-all hidden group-hover:block rounded-2xl hover:cursor-pointer hover:opacity-100 active:opacity-100 opacity-50 px-3 py-1 bg-gray-200 text-3xl absolute right-3 top-[50%] -translate-x-0 translate-y-[-50%]"
      >
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className="flex absolute bottom-2 left-[50%] transform translate-x-[-50%] justify-center py-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all hover:cursor-pointer hover:opacity-100 active:opacity-100 opacity-50 w-4 h-4 rounded-full mx-1 ${
              currentImage === index ? "bg-gray-950" : "bg-gray-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
