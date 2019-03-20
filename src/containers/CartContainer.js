import { Component } from 'react';
import PropTypes from 'prop-types';

// import api from 'helpers/api';

class CartContainer extends Component
{
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    cartItems: [],
  };

  // componentDidMount() {
  //   api.fetchProducts()
  //     .then(({ products: cartItems }) => {
  //       this.setState({
  //         cartItems: cartItems.slice(0, 2),
  //       });
  //     })
  // }

  handleOnRemoveFromCart = id => {
    alert(`ID numarası "${id}" olan ürünü sepetten kaldır`);
  };

  render() {
    const { children } = this.props;
    const { cartItems } = this.state;

    return children && children({ cartItems, onRemoveFromCart: this.handleOnRemoveFromCart });
  }
}

export default CartContainer;