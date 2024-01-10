import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
// import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/Error';
import './index.css';
import { Layout } from './layout/Menu/Layout.tsx';
import { Product } from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import { AuthLayout } from './layout/Auth/AuthLayout.tsx';
import { Register } from './pages/Register/Register.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>!Ошибка!</>,
        loader: async ({ params }) => {
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch((e) => reject(e));
              }, 2000);
            }),
          });

          //   data: await axios
          //     .get(`${PREFIX}/products/${params.id}`)
          //     .then((data) => data),
          // });

          // await new Promise<void>((resolve) => {
          //   throw new Error('errrorrr');
          //   setTimeout(() => {
          //     resolve();
          //   }, 2000);
          // });
          // const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          // return data;
        },
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
