import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, theme } from 'antd'

import { Paths } from './paths';

import { Login } from './pages/login';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Hello!</h1>
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  },
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
      <RouterProvider router={ router }/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
