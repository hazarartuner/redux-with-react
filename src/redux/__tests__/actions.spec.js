import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  Types,
  setActiveCategory,
  addToCart,
  removeFromCart,
  loadAllProducts,
  loadProduct,
  loadAllCategories
} from "redux/actions";

// region Mock the API helper
jest.mock("helpers/api", () => ({
  fetchProducts: jest.fn().mockResolvedValue({
    products: ["product1", "product2", "product3"]
  }),
  fetchProduct: jest.fn().mockResolvedValue({
    product: "some-product"
  }),
  fetchCategories: jest.fn().mockResolvedValue({
    categories: ["category1", "category2", "category3"]
  })
}));
// endregion

// region Create Mock Store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// endregion

describe("action tests", () => {
  // region Action Creators
  it("should create an action to set the category as active", () => {
    const category = null;
    const expectedAction = {
      type: Types.CATEGORY_SET_ACTIVE,
      payload: {
        category
      }
    };

    expect(setActiveCategory(category)).toEqual(expectedAction);
  });

  it("should create an action to add product to the cart", () => {
    const product = 2;
    const expectedAction = {
      type: Types.CART_ADD_PRODUCT,
      payload: {
        product
      }
    };

    expect(addToCart(product)).toEqual(expectedAction);
  });

  it("should create an action to remove product from the cart", () => {
    const product = 2;
    const expectedAction = {
      type: Types.CART_REMOVE_PRODUCT,
      payload: {
        product
      }
    };

    expect(removeFromCart(product)).toEqual(expectedAction);
  });
  // endregion

  // region Async Action Creators
  it("should create an action/actions to load products", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: Types.PRODUCT_SET_ALL,
        payload: {
          products: ["product1", "product2", "product3"]
        }
      }
    ];

    return store.dispatch(loadAllProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action/actions to load single product", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: Types.PRODUCT_SET_ONE,
        payload: {
          product: "some-product"
        }
      }
    ];

    return store.dispatch(loadProduct(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action/actions to load categories", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: Types.CATEGORY_SET_ALL,
        payload: {
          categories: ["category1", "category2", "category3"]
        }
      }
    ];

    return store.dispatch(loadAllCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // endregion
});
