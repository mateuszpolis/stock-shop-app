import React from "react";

type Props = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  content: string;
  additionalStyle?: string;
};

function ButtonDefault({ type, content, additionalStyle }: Props) {
  return (
    <button
      type={type}
      className={
        additionalStyle +
        " text-gray-50 dark:text-gray-950 bg-gray-950 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-50 dark:hover:bg-gray-200 dark:focus:ring-gray-300 transition-all"
      }
    >
      {content}
    </button>
  );
}

export default ButtonDefault;
