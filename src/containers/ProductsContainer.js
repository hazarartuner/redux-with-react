import { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from 'helpers/fakeData';

class ProductsContainer extends Component
{
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    products: products,
    categories: ['Meyve', 'Hediye']
  };

  handleOnAddToCart = id => {
    alert(`ID numarası "${id}" olan ürünü sepete ekle`);
  };

  render() {
    const { children } = this.props;
    const { products, categories } = this.state;

    return children && children({ products, categories, onAddToCart: this.handleOnAddToCart });
  }
}

export default ProductsContainer;