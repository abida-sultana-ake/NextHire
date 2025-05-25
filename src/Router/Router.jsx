import { createBrowserRouter } from "react-router";
import RouterLayouts from "../RouterLayouts/RouterLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Terms from "../Pages/Conditions/Terms";
import Privacy from "../Pages/Conditions/Privacy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayouts />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/terms",
        element: <Terms/>
      },
      {
        path: "/privacy",
        element: <Privacy/>
      },
    ],
  },
]);
export default router;
