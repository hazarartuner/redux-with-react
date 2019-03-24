import { Types } from "redux/actions";

const initialState = {
  products: {},
  categories: [],
  selectedCategory: null,
  selectedProduct: null,
  cart: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_SET_ALL: {
      const { products } = action.payload;

      return {
        ...state,
        products: products.reduce((acc, curr) => {
          acc[curr.id] = curr;

          return acc;
        }, {})
      };
    }

    case Types.PRODUCT_SET_ONE: {
      const { product } = action.payload;

      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: product
        },
        selectedProduct: product.id
      };
    }

    case Types.CATEGORY_SET_ALL: {
      const { categories } = action.payload;

      return {
        ...state,
        categories
      };
    }

    case Types.CATEGORY_SET_ACTIVE: {
      const { category } = action.payload;

      return {
        ...state,
        selectedCategory: category
      };
    }

    case Types.CART_ADD_PRODUCT: {
      const { product } = action.payload;

      const cartItem = state.cart[product] || {
        product,
        count: 0
      };

      cartItem.count++;

      return {
        ...state,
        cart: {
          ...state.cart,
          [product]: cartItem
        }
      };
    }

    case Types.CART_REMOVE_PRODUCT: {
      const { product } = action.payload;

      const cart = {
        ...state.cart
      };

      if (cart[product]) {
        delete cart[product];
      }

      return {
        ...state,
        cart
      };
    }

    default:
      return state;
  }
};
