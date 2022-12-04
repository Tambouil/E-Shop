import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:id',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
