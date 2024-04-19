import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("./Pages/Home"));
const Chat = lazy(() => import("./Pages/Chat"));
const Login = lazy(() => import("./Pages/Login"));
const Group = lazy(() => import("./Pages/Group"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "chat/:chatId",
        element: <Chat />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "group",
        element: <Group />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
