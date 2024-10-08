import App from "./App";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import ErrorPage from "./components/errorPage/ErrorPage";
import Cart from "./components/cart/Cart";

const routes = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*", // Fallback for any undefined routes
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
