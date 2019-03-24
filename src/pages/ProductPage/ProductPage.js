import React, { Component } from "react";

import ProductItem from "components/ProductItem";
import Cart from "components/Cart";
import CartItem from "components/CartItem";

import ProductContainer from "containers/ProductContainer";
import CartContainer from "containers/CartContainer";

import "./ProductPage.css";

class ProductPage extends Component {
  render() {
    return (
      <div className="ProductPage">
        <section className="product-section">
          <ProductContainer>
            {({ product, onAddToCart }) =>
              !product ? null : (
                <ProductItem product={product} onAddToCart={onAddToCart} />
              )
            }
          </ProductContainer>
        </section>

        <section className="cart-section">
          <CartContainer>
            {({ cartItems, onRemoveFromCart }) => (
              <Cart cartItems={cartItems}>
                {cartItems.map(({ product, count }) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    count={count}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                ))}
              </Cart>
            )}
          </CartContainer>
        </section>
      </div>
    );
  }
}

export default ProductPage;
