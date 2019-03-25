import { createSelector } from "reselect";

const getProducts = state => state.get("products");
const getCategories = state => state.get("categories");
const getSelectedCategory = state => state.get("selectedCategory");

const getSelectedProductId = state => state.get("selectedProduct");
const getCart = state => state.get("cart");

export const productsSelector = createSelector(
  [getProducts, getSelectedCategory],
  (products, selectedCategory) => {
    return products
      .valueSeq()
      .filter(
        product =>
          !selectedCategory || product.get("category") === selectedCategory
      )
      .toJS();
  }
);

export const selectedProductSelector = createSelector(
  [getProducts, getSelectedProductId],
  (products, selectedProductId) => {
    const product = products.get(selectedProductId);
    return product && product.toJS();
  }
);

export const cartSelector = createSelector(
  [getProducts, getCart],
  (products, cart) =>
    cart
      .valueSeq()
      .map(cartItem => ({
        count: cartItem.get("count"),
        product: products.get(cartItem.get("product"))
      }))
      .toJS()
);

export const categoriesSelector = createSelector(
  [getCategories],
  categories => categories.toJS()
);

export const selectedCategorySelector = createSelector(
  [getSelectedCategory],
  selectedCategory => selectedCategory
);
