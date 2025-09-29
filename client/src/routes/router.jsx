import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>404 Not Found</div>,
    children: [{ index: true, element: <Home /> }],
  },
]);
