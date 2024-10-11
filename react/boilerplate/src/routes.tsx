import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./routes/DefaultLayout";
import Inspect from "./routes/Inspect";
import Login from "./routes/Login";
import { Auth } from "./Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "inspect",
        element: <DefaultLayout />,
        children: [
          {
            path: ":categoryId",
            element: <Inspect />,
          },
        ],
      },
    ],
  },
]);
