import React from "react";

function Description() {
  const handleToggleDescription = () => {
    const description = document.getElementById("description");
    const angle = document.getElementById("description-angle");
    if (description?.classList.contains("block")) {
      description?.classList.remove("block");
      description?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      description?.classList.add("block");
      description?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleDescription}
        className="relative flex items-center hover:cursor-pointer"
      >
        <h1 className="text-xl font-semibold">Description</h1>{" "}
        <i
          id="description-angle"
          className="fa-solid fa-angle-down transition-all"
        />
      </div>
      <div id="description" className="p-2 hidden">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, voluptates, quia voluptate quod quos
          voluptatibus quas doloribus quidem fugiat. Quisquam voluptatum,
          quibusdam, voluptates, quia voluptate quod quos voluptatibus quas
          doloribus quidem fugiat. Quisquam voluptatum, quibusdam, voluptates,
          quia voluptate quod quos voluptatibus quas doloribus quidem fugiat.
          Quisquam voluptatum, quibusdam, voluptates, quia
        </p>
      </div>
    </div>
  );
}

export default Description;
