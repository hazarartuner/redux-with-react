import { Types } from "redux/actions";
import { fromJS } from "immutable";

const initialState = fromJS({
  products: {},
  categories: [],
  selectedCategory: null,
  selectedProduct: null,
  cart: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_SET_ALL: {
      const { products } = action.payload;

      const productsObj = products.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});

      return state.set("products", fromJS(productsObj));
    }

    case Types.PRODUCT_SET_ONE: {
      const { product } = action.payload;

      return state
        .setIn(["products", product.id], fromJS(product))
        .set("selectedProduct", product.id);
    }

    case Types.CATEGORY_SET_ALL: {
      const { categories } = action.payload;

      return state.set("categories", fromJS(categories));
    }

    case Types.CATEGORY_SET_ACTIVE: {
      const { category } = action.payload;

      return state.set("selectedCategory", category);
    }

    case Types.CART_ADD_PRODUCT: {
      const { product } = action.payload;

      let cartItem = state.getIn(
        ["cart", product],
        fromJS({
          product,
          count: 0
        })
      );

      cartItem = cartItem.set("count", cartItem.get("count") + 1);

      return state.setIn(["cart", product], cartItem);
    }

    case Types.CART_REMOVE_PRODUCT: {
      const { product } = action.payload;

      return state.deleteIn(["cart", product]);
    }

    default:
      return state;
  }
};
