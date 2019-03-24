export const Types = {
  PRODUCT_SET_ALL: "PRODUCT_SET_ALL",
  PRODUCT_SET_ONE: "PRODUCT_SET_ONE",
  CATEGORY_SET_ALL: "CATEGORY_SET_ALL",
  CATEGORY_SET_ACTIVE: "CATEGORY_SET_ACTIVE",
  CART_ADD_PRODUCT: "CART_ADD_PRODUCT",
  CART_REMOVE_PRODUCT: "CART_REMOVE_PRODUCT"
};

export function loadAllProducts() {
  const { products } = require("helpers/fakeData");

  return {
    type: Types.PRODUCT_SET_ALL,
    payload: {
      products
    }
  };
}

export function loadProduct(productId) {
  const { products } = require("helpers/fakeData");

  return {
    type: Types.PRODUCT_SET_ONE,
    payload: {
      product: products.find(product => product.id === productId)
    }
  };
}

export function loadAllCategories() {
  const { categories } = require("helpers/fakeData");

  return {
    type: Types.CATEGORY_SET_ALL,
    payload: {
      categories
    }
  };
}

export function setActiveCategory(categoryId) {
  return {
    type: Types.CATEGORY_SET_ACTIVE,
    payload: {
      category: categoryId
    }
  };
}

export function addToCart(productId) {
  return {
    type: Types.CART_ADD_PRODUCT,
    payload: {
      product: productId
    }
  };
}

export function removeFromCart(productId) {
  return {
    type: Types.CART_REMOVE_PRODUCT,
    payload: {
      product: productId
    }
  };
}
