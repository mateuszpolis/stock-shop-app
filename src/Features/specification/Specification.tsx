import React from "react";

function Specification() {
  type AttributesType = {
    [key: string]: string;
  };

  const attributes: AttributesType = {
    Brand: "Apple",
    Model: "iPhone 13 Pro",
    Color: "Silver",
    Storage: "128GB",
    RAM: "8GB",
  };

  const handleToggleSpecification = () => {
    const specification = document.getElementById("specification");
    const angle = document.getElementById("specification-angle");
    if (specification?.classList.contains("grid")) {
      specification?.classList.remove("grid");
      specification?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      specification?.classList.add("grid");
      specification?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleSpecification}
        className="flex items-center hover:cursor-pointer"
      >
        <h1 className="text-xl lg:text-2xl font-semibold">Specification</h1>{" "}
        <i id="specification-angle" className="fa-solid fa-angle-down" />
      </div>
      <div id="specification" className="grid-cols-2 p-2 hidden">
        {Object.keys(attributes).map((key) => (
          <div key={key} className="grid grid-cols-2">
            <h1 className="text-sm lg:text-lg font-semibold">{key}:</h1>
            <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-300">
              {attributes[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specification;
