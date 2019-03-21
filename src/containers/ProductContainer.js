import { Component } from 'react';
import PropTypes from 'prop-types';

import { products } from 'helpers/fakeData';

class ProductContainer extends Component
{
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    product: {},
  };

  componentDidMount() {
    this.setState({
      product: products[0],
    });
  }

  handleOnAddToCart = id => {
    alert(`ID numarası "${id}" olan ürünü sepete ekle`);
  };

  render() {
    const { children } = this.props;
    const { product } = this.state;


    return children && children({
      product,
      onAddToCart: this.handleOnAddToCart,
    });
  }
}

export default ProductContainer;