import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnalyseFormPage } from './pages/AnalyseFormPage';
import { Provider } from 'react-redux';
import { store } from './store';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/analyse-form',
    element: <AnalyseFormPage />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
