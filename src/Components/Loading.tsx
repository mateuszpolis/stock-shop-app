import React from "react";

function Loading() {
  return (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-row justify-center items-center">
      <div className="animate-spin rounded-full h-24 w-24 border-8 border-b-transparent border-neutral-950 dark:border-neutral-50 dark:border-b-transparent"></div>
    </div>
  );
}

export default Loading;
