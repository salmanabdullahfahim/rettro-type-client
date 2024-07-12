import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export interface Product {
  _id: string;
  image: string;
  name: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
}

// Cart item interface
export interface CartItem extends Product {
  cartQuantity: number;
}

// Initial state interface
export interface CartState {
  items: CartItem[];
  totalOrderPrice: number;
}

const initialState: CartState = {
  items: [],
  totalOrderPrice: 0,
};

// Utility function to show sweet alert
const showAlert = (message: string) => {
  Swal.fire({
    title: message,
    text: "Out of Stock!",
    icon: "error",
  });
};

// Cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        if (existingItem.availableQuantity > 0) {
          existingItem.availableQuantity = existingItem.availableQuantity - 1;
          existingItem.cartQuantity += 1;
          state.totalOrderPrice += product.price;
        } else {
          return showAlert("Product is out of stock!");
        }
      } else {
        if (product.availableQuantity > 0) {
          product.availableQuantity = product.availableQuantity - 1;
          state.items.push({ ...product, cartQuantity: 1 });
          state.totalOrderPrice += product.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        state.totalOrderPrice -= existingItem.price * existingItem.cartQuantity;
        existingItem.availableQuantity += existingItem.cartQuantity;
        state.items = state.items.filter((item) => item._id !== productId);
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.availableQuantity > 0) {
          existingItem.cartQuantity += 1;
          existingItem.availableQuantity -= 1;
          state.totalOrderPrice += existingItem.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.cartQuantity > 1) {
          existingItem.cartQuantity -= 1;
          existingItem.availableQuantity += 1;
          state.totalOrderPrice -= existingItem.price;
        } else {
          state.totalOrderPrice -= existingItem.price;
          existingItem.availableQuantity += 1;
          state.items = state.items.filter((item) => item._id !== productId);
        }
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.totalOrderPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
