import { createSelector } from "reselect";

const getProducts = state => state.products;
const getSelectedCategory = state => state.selectedCategory;

const getSelectedProductId = state => state.selectedProduct;
const getCart = state => state.cart;

export const productsSelector = createSelector(
  [getProducts, getSelectedCategory],
  (products, selectedCategory) =>
    Object.values(products).filter(
      product => !selectedCategory || product.category === selectedCategory
    )
);

export const selectedProductSelector = createSelector(
  [getProducts, getSelectedProductId],
  (products, selectedProductId) => products[selectedProductId]
);

export const cartSelector = createSelector(
  [getProducts, getCart],
  (products, cart) =>
    Object.values(cart).map(cartItem => ({
      count: cartItem.count,
      product: products[cartItem.product]
    }))
);
