import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './Pages/404';
import LoginPage from './Pages/login';
import ProductPage from './Pages/product';
import ProfilePage from './Pages/profile';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterPage from './Pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
