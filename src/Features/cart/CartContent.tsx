import React from "react";
import SideShortcuts from "../../Components/SideShortcuts";
import ProductCardCart from "../../Components/ProductCardCart";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

const products: product[] = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    producer: "Apple",
    price: 999,
    price_before: 1299,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
  {
    id: 2,
    name: "iMac 2021",
    producer: "Apple",
    price: 999,
  },
];

function CartContent() {
  let productsDiv;
  let checkoutButton;
  if (products.length > 0) {
    productsDiv = products.map((product) => (
      <ProductCardCart
        key={product.id}
        id={product.id}
        name={product.name}
        producer={product.producer}
        price={product.price}
        price_before={product.price_before}
        img={product.img}
      />
    ));
    checkoutButton = (
      <button
        id="checkout"
        className="mt-2 w-full bg-neutral-950 hover:bg-neutral-800 transition-all text-white font-semibold rounded-lg py-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
      >
        Checkout <i className="fa-solid fa-cash-register"></i>
      </button>
    );
  } else {
    productsDiv = (
      <div className="flex flex-col justify-center items-center">
        <i className="fa-solid my-1 fa-cart-shopping text-9xl text-neutral-300"></i>
        <p className="text-2xl text-neutral-300">Your cart is empty</p>
      </div>
    );
    checkoutButton = (
      <button
        id="checkout"
        className="cursor-not-allowed mt-2 w-full bg-neutral-950 opacity-50 transition-all text-white font-semibold rounded-lg py-2 dark:text-neutral-950 dark:bg-neutral-50 dark:hover:bg-neutral-200"
      >
        Checkout <i className="fa-solid fa-cash-register"></i>
      </button>
    );
  }

  return (
    <div className="p-5 flex">
      <div className="w-full lg:w-1/2 lg:p-2">
        <div>
          <h1 className="text-2xl font-semibold dark:text-neutral-50">
            Your cart <i className="fa-solid fa-cart-shopping text-green-500" />{" "}
          </h1>
        </div>
        <div>
          <div className="overflow-y-scroll overscroll-auto max-h-[400px] relative flex flex-col w-full rounded-lg border-y-2 border-neutral-200 dark:border-neutral-500">
            {productsDiv}
          </div>
          <div>
            <h1
              id="total"
              className="text-2xl font-semibold dark:text-neutral-50"
            >
              Total amount: $0
            </h1>
            {checkoutButton}
          </div>
        </div>
      </div>
      <SideShortcuts />
    </div>
  );
}

export default CartContent;
