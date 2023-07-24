import React from "react";

function Footer() {
  return (
    <footer className="mt-auto w-full p-10 bg-neutral-900 dark:bg-neutral-50 rounded-t-xl text-lg">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-neutral-50 dark:text-neutral-950 font-bold text-md">
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
            className="text-neutral-50 dark:text-neutral-950 mr-4 hover:text-neutral-950  dark:hover:text-neutral-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mateuszpolis/"
            className="text-neutral-50 dark:text-neutral-950 hover:text-neutral-950  dark:hover:text-neutral-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
