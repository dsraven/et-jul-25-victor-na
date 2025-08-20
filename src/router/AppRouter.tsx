import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import { ProductDetail, Products } from '../pages/products';
import { UserDetail, Users } from '../pages/users';

const AppRouter = () => {
  const ROOT_PATH = '/';

  const router = createBrowserRouter([
    {
      path: ROOT_PATH,
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Navigate to={'/products'} />,
        },
        {
          path: 'products',
          children: [
            {
              path: '',
              element: <Products />,
            },
            {
              path: ':id',
              element: <ProductDetail />,
            },
          ],
        },
        {
          path: 'users',
          children: [
            {
              path: '',
              element: <Users />,
            },
            {
              path: ':id',
              element: <UserDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
