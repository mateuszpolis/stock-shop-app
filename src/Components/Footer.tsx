import React from "react";

function Footer() {
  return (
    <footer className="w-full p-10 bg-gray-200 rounded-t-xl text-lg">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Mateusz Polis
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="flex justify-normal items-center text-3xl">
          <a
            href="https://github.com/mateuszpolis"
            className="text-gray-500 mr-4 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mateuszpolis/"
            className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50 hover:cursor-pointer transition-all"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
