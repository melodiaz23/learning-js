import React from 'react'; // Modern JS import
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts from './routes/Posts';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Posts />, children: [
        { path: '/create-post', element: <NewPost /> },
      ] }, //Each object represents one path
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
