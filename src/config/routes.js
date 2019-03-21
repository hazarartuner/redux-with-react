import HomePage from 'pages/HomePage';
import ProductPage from 'pages/ProductPage';
import NotFoundPage from 'pages/NotFoundPage';

const routes = {
  homePage: {
    path: '/',
    component: HomePage,
    exact: true,
  },
  productPage: {
    path: '/urun/:id',
    component: ProductPage,
  },
  notFoundPage: {
    path: '**',
    component: NotFoundPage,
  },
};

export default routes;