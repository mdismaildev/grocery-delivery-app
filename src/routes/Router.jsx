import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Products from '../pages/Products';
import Home from '../pages/Home';
import Deals from '../pages/Deals';
import ProductsDetails from '../pages/ProductsDetails';
import MyOrders from '../pages/MyOrders';
import Login from '../pages/register/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/shop',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'deals',
        element: <Deals />,
      },
      {
        path: 'product/:id',
        element: <ProductsDetails />,
      },
      {
        path: 'my-orders',
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
