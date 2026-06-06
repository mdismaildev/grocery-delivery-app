import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Products from '../pages/Products';
import Home from '../pages/Home';
import Deals from '../pages/Deals';
import ProductsDetails from '../pages/ProductsDetails';
import MyOrders from '../pages/MyOrders';
import Login from '../pages/register/Login';
import Register from '../pages/register/Register';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
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
        element: (
          <PrivetRoute>
            <MyOrders />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
