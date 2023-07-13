import React from "react";

type Props = {
  images: string[];
};

function Gallery({ images }: Props) {
  return (
    <div className="group w-full h-60 rounded-lg overflow-hidden bg-gray-200 relative transition-all">
      <div
        style={{ backgroundImage: `url(${images[0]})` }}
        className="w-full h-full rounded-lg bg-cover duration-500"
      ></div>
      <div className="transition-all hidden group-hover:block rounded-2xl hover:cursor-pointer hover:opacity-100 active:opacity-100 opacity-50 px-3 py-1 bg-gray-200 text-3xl absolute left-3 top-[50%] -translate-x-0 translate-y-[-50%]">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="transition-all hidden group-hover:block rounded-2xl hover:cursor-pointer hover:opacity-100 active:opacity-100 opacity-50 px-3 py-1 bg-gray-200 text-3xl absolute right-3 top-[50%] -translate-x-0 translate-y-[-50%]">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Gallery;
