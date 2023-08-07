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
        " text-neutral-50 text-base dark:text-neutral-950 bg-neutral-950 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg px-4 py-2 dark:bg-neutral-50 dark:hover:bg-neutral-200 dark:focus:ring-neutral-300 transition-all"
      }
    >
      {content}
    </button>
  );
}

export default ButtonDefault;
