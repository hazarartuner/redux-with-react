import reducer from "redux/reducers";
import { Types } from "redux/actions";

describe("reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(null, {})).toEqual(null);
  });

  it("should create new state that containing with the products", () => {
    const expectedState = {
      products: {
        "1": { id: "1", name: "product 1" },
        "2": { id: "2", name: "product 2" }
      }
    };

    expect(
      reducer(
        {},
        {
          type: Types.PRODUCT_SET_ALL,
          payload: {
            products: [
              { id: "1", name: "product 1" },
              { id: "2", name: "product 2" }
            ]
          }
        }
      )
    ).toEqual(expectedState);
  });

  it("should create new state with the products list which will contain the product and the selected product will be the id of the product", () => {
    const expectedState = {
      products: {
        "2": { id: "2", name: "product 2" }
      },
      selectedProduct: "2"
    };

    expect(
      reducer(
        {},
        {
          type: Types.PRODUCT_SET_ONE,
          payload: {
            product: { id: "2", name: "product 2" }
          }
        }
      )
    ).toEqual(expectedState);
  });

  it("should create new state that containing with the categories", () => {
    const expectedState = {
      categories: [
        { id: "1", name: "category 1" },
        { id: "2", name: "category 2" }
      ]
    };

    expect(
      reducer(
        {},
        {
          type: Types.CATEGORY_SET_ALL,
          payload: {
            categories: [
              { id: "1", name: "category 1" },
              { id: "2", name: "category 2" }
            ]
          }
        }
      )
    ).toEqual(expectedState);
  });

  it("should create new state that selected category will be the id of the passed category", () => {
    const expectedState = {
      selectedCategory: "1"
    };

    expect(
      reducer(
        {},
        {
          type: Types.CATEGORY_SET_ACTIVE,
          payload: {
            category: "1"
          }
        }
      )
    ).toEqual(expectedState);
  });

  it("should create new state that contains the passed product within cart list", () => {
    const expectedState = {
      cart: {
        "1": { count: 1, product: "1" }
      }
    };

    expect(
      reducer(
        { cart: {} },
        {
          type: Types.CART_ADD_PRODUCT,
          payload: {
            product: "1"
          }
        }
      )
    ).toEqual(expectedState);
  });

  it("should create new state with increasing the product count within the cart", () => {
    const initialState = {
      cart: {
        "1": { count: 1, product: "1" }
      }
    };

    const expectedState = {
      cart: {
        "1": { count: 2, product: "1" }
      }
    };

    expect(
      reducer(initialState, {
        type: Types.CART_ADD_PRODUCT,
        payload: {
          product: "1"
        }
      })
    ).toEqual(expectedState);
  });

  it("should create new state with removing the product from the cart", () => {
    const initialState = {
      cart: {
        "1": { count: 1, product: "1" }
      }
    };

    const expectedState = {
      cart: {}
    };

    expect(
      reducer(initialState, {
        type: Types.CART_REMOVE_PRODUCT,
        payload: {
          product: "1"
        }
      })
    ).toEqual(expectedState);
  });
});
