import React, { Component, Fragment } from 'react';

import Products from "components/Products";
import ProductItem from "components/ProductItem";
import Cart from "components/Cart";
import CartItem from "components/CartItem";
import Categories from "components/Categories";
import CategoryItem from "components/CategoryItem";

import ProductsContainer from 'containers/ProductsContainer';
import CartContainer from 'containers/CartContainer';

import './HomePage.css';

class HomePage extends Component {

  render() {
    return <div className="HomePage">
      <section className={'products-section'}>
        <ProductsContainer>
          {({ products, categories, onAddToCart, onCategoryChange }) => (
            <Fragment>
              <Categories>
                {categories.map(category =>
                  <CategoryItem key={category.id} id={category.id} onClick={onCategoryChange}>{category.name}</CategoryItem>
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
    </div>
  }
}

export default HomePage;