//packages block
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//components block
import ListUsers from "./pages/List-Users";
import DetailUser from "./pages/UserDetail";
import ErrorPage from "./pages/404";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ListUsers />,
      },
      {
        path: "/:id",
        element: <DetailUser />,
      },
    ]
  },

]);


export const Routes: FC = (): JSX.Element => <RouterProvider router={router} />
