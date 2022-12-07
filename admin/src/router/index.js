import { createBrowserRouter } from "react-router-dom";
import Home from "./../views/Home";
import Service from "./../views/Service";
import Appointment from "./../views/Appointment";
import Profile from "./../views/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>
          {" "}
          <p class="text-center">Oopss... 404 Not Found</p>
        </h1>
      </div>
    ),
  },
]);
export default router;
