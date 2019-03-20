import { Component } from 'react';
import PropTypes from 'prop-types';

import api from 'helpers/api';

class ProductsContainer extends Component
{
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    products: [],
    categories: ['Meyve', 'Hediye']
  };

  componentDidMount() {
    api.fetchProducts()
      .then(({ products }) => {
        this.setState({
          products
        });
      });
  }

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