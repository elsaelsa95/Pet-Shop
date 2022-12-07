import { createBrowserRouter, redirect } from "react-router-dom";
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
    loader:()=>{
      const access_token = localStorage.getItem("access_token")
      if(!access_token) return redirect ("/")
  }
  },
  {
    path: "/appointment",
    element: <Appointment />,
    loader:()=>{
      const access_token = localStorage.getItem("access_token")
      if(!access_token) return redirect ("/")
  }
  },
  {
    path: "/profile",
    element: <Profile />,
    loader:()=>{
      const access_token = localStorage.getItem("access_token")
      if(!access_token) return redirect ("/")
  }
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
