import fakeData from "helpers/fakeData";

class Api {
  fetchProducts(category) {
    return new Promise(resolve => {
      const products = fakeData.reduce((acc, curr) => {
        if (!category || curr.category === category) {
          acc.push(curr);
        }

        return acc;
      }, []);

      setTimeout(() => resolve({ products }), 300);
    });
  }
}

export default new Api();
