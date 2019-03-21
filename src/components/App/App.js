import React, { Component, Fragment } from 'react';

import Products from "components/Products";
import ProductItem from "components/ProductItem";
import Cart from "components/Cart";
import CartItem from "components/CartItem";
import Categories from "components/Categories";
import CategoryItem from "components/CategoryItem";

import ProductsContainer from 'containers/ProductsContainer';
import CartContainer from 'containers/CartContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>The Market App</header>

        <section className={'products-section'}>
          <ProductsContainer>
            {({ products, categories, onAddToCart, onCategoryChange }) => (
              <Fragment>
                <Categories>
                  {categories.map(category =>
                    <CategoryItem id={category.id} onClick={onCategoryChange}>{category.name}</CategoryItem>
                  )}
                </Categories>
                <Products>
                  {products.map(product =>
                    <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
                  )}
                </Products>
              </Fragment>
            )}
          </ProductsContainer>
        </section>

        <section className="cart-section">
          <CartContainer>
            {({ cartItems, onRemoveFromCart }) => (
              <Cart cartItems={cartItems}>
                {cartItems.map(cartItem =>
                  <CartItem key={cartItem.id} item={cartItem} onRemoveFromCart={onRemoveFromCart} />
                )}
              </Cart>
            )}
          </CartContainer>
        </section>

        <footer>@ 2019</footer>
      </div>
    );
  }
}

export default App;
