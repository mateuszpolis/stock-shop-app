import React from "react";

function Footer() {
  return (
    <footer className="mt-auto w-full p-10 bg-neutral-200 rounded-t-xl text-lg dark:bg-neutral-800">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-neutral-500 sm:text-center dark:text-neutral-400">
            © 2023{" "}
            <a
              href="https://www.linkedin.com/in/mateuszpolis/"
              className="hover:underline"
            >
              Mateusz Polis
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="flex justify-normal items-center text-3xl">
          <a
            href="https://github.com/mateuszpolis"
            className="text-neutral-500 mr-4 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mateuszpolis/"
            className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
