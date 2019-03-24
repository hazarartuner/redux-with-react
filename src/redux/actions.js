import api from "helpers/api";

export const Types = {
  PRODUCT_SET_ALL: "PRODUCT_SET_ALL",
  PRODUCT_SET_ONE: "PRODUCT_SET_ONE",
  CATEGORY_SET_ALL: "CATEGORY_SET_ALL",
  CATEGORY_SET_ACTIVE: "CATEGORY_SET_ACTIVE",
  CART_ADD_PRODUCT: "CART_ADD_PRODUCT",
  CART_REMOVE_PRODUCT: "CART_REMOVE_PRODUCT"
};

export const loadAllProducts = () => dispatch => {
  api.fetchProducts().then(response => {
    dispatch({
      type: Types.PRODUCT_SET_ALL,
      payload: {
        products: response.products
      }
    });
  });
};

export const loadProduct = productId => dispatch => {
  api.fetchProduct(productId).then(response =>
    dispatch({
      type: Types.PRODUCT_SET_ONE,
      payload: {
        product: response.product
      }
    })
  );
};

export const loadAllCategories = () => dispatch => {
  api.fetchCategories().then(response =>
    dispatch({
      type: Types.CATEGORY_SET_ALL,
      payload: {
        categories: response.categories
      }
    })
  );
};

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
