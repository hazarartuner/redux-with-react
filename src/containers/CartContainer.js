import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeFromCart } from "redux/actions";

class CartContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  handleOnRemoveFromCart = id => {
    const { removeFromCart } = this.props;

    removeFromCart && removeFromCart(id);
  };

  render() {
    const { children, cartItems } = this.props;

    return (
      children &&
      children({ cartItems, onRemoveFromCart: this.handleOnRemoveFromCart })
    );
  }
}

const mapStateToProps = state => ({
  cartItems: Object.values(state.cart).map(cartItem => ({
    count: cartItem.count,
    product: state.products[cartItem.product]
  }))
});

const mapDispatchToProps = {
  removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
