import ProductList from "./components/ProductList"
import CartPage from "./Pages/CartPage";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePage";
import SingupPage from "./Pages/SingupPage"
import Wrapper from "./Pages/Wrapper";
import WishListPage from './Pages/WishListPage'
import ContactPage from './Pages/ContactPage'
import CategoryPage from './Pages/CategoryPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductCategoryPage from "./Pages/ProductCategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "singup",
        element: <SingupPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "wishlist",
        element: <WishListPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/category/:id",
        element: <ProductCategoryPage />,
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
