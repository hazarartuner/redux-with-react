import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { loadProduct, addToCart } from "redux/actions";

import { selectedProductSelector } from "redux/selectors";

class ProductContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loadProduct, match } = this.props;

    loadProduct && loadProduct(match.params.id);
  }

  handleOnAddToCart = id => {
    const { addToCart } = this.props;

    addToCart && addToCart(id);
  };

  render() {
    const { children, product = null } = this.props;

    return (
      children &&
      children({
        product,
        onAddToCart: this.handleOnAddToCart
      })
    );
  }
}

const mapStateToProps = state => ({
  product: selectedProductSelector(state)
});

const mapDispatchToProps = {
  loadProduct,
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductContainer));
