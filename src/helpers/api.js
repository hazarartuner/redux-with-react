import { products, categories } from "helpers/fakeData";

class Api {
  fetchProducts() {
    return new Promise(resolve => {
      setTimeout(() => resolve({ products }), 300);
    });
  }

  fetchProduct(id) {
    return new Promise(resolve => {
      const product = products.find(product => product.id === id);

      setTimeout(() => resolve({ product }), 300);
    });
  }

  fetchCategories() {
    return new Promise(resolve => {
      setTimeout(() => resolve({ categories }), 300);
    });
  }
}

export default new Api();
