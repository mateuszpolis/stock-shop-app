import React, { useState, useRef, useEffect } from "react";
import img1 from "../../images/350wpx_6ec757775f8918266d758f0c14124d78.jpg";
import img2 from "../../images/350wpx_8ae78e1e12374358083560891960dc37.jpg";
import img3 from "../../images/350wpx_87f9beb21f42f925096180934e984c15.jpg";

type Props = {
  productId: number;
};

function Gallery({ productId }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const images = [img1, img2, img3];

  const nextImage = () => {
    const newIndex = (currentImage + 1) % images.length;
    scrollToIndex(newIndex);
    setCurrentImage(newIndex);
  };

  const previousImage = () => {
    const newIndex = (currentImage - 1 + images.length) % images.length;
    scrollToIndex(newIndex);
    setCurrentImage(newIndex);
  };

  const handleThumbnailClick = (index: number) => {
    scrollToIndex(index);
    setCurrentImage(index);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const imageWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * imageWidth,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const imageWidth = scrollContainerRef.current.offsetWidth;
        const newIndex = Math.floor(scrollLeft / imageWidth);
        setCurrentImage(newIndex);
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="group w-full h-60 sm:h-80 md:h-96  md:mt-10 rounded-lg overflow-hidden bg-gray-200 relative transition-all">
      <div
        className="h-full w-full overflow-x-scroll snap-x flex no-scrollbar"
        ref={scrollContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            className="shrink-0 w-full h-full bg-center bg-cover duration-500 snap-start"
          ></div>
        ))}
      </div>

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
            onClick={() => handleThumbnailClick(index)}
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
