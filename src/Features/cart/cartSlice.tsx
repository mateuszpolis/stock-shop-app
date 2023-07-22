import { createSlice } from "@reduxjs/toolkit";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
  quantity: number;
};

interface CartState {
  cartId: number;
  products: product[];
  totalQuantity: number;
  totalPrice: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: 0,
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  } as CartState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const productQuantity = state.products[productIndex].quantity;
      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      }
      state.totalQuantity -= productQuantity;
      state.totalPrice -= action.payload.price * productQuantity;
    },
    decrementProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        if (state.products[productIndex].quantity === 1) {
          state.products.splice(productIndex, 1);
        } else {
          state.products[productIndex].quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= action.payload.price;
        }
      }
      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
    incrementProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export const selectProducts = (state: { cart: CartState }) => {
  return state.cart.products;
};

export const selectTotalQuantity = (state: { cart: CartState }) => {
  return state.cart.totalQuantity;
};

export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.totalPrice;
};

export const { addProduct, removeProduct, decrementProduct, incrementProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
