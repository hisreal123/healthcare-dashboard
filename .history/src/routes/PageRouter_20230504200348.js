import Navigation from "../../components/Navigation";
import Error from "./Error";
import Dashboard from "../views/Dashboard";
import Appointment from "../views/Appointment";
import Doctor from "../views/Doctor";
import Department from "../views/Department";
import Patient from "../views/Patient";
import Payment from "../views/Payment";

import { createBrowserRouter} from "react-router-dom";

const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "appointment", element: <Appointment /> },
      { path: "doctor", element: <Doctor /> },
      { path: "department", element: <Department /> },
      { path: "patient", element: <Patient /> },
      { path: "payment", element: <Payment /> },
      { path: "*", element: <Error /> },
    ],
  },
]);


export import Navigation from "../components/Navigation";
export import Error from "./routes/Error";
export import Dashboard from "./views/Dashboard";
export import Appointment from "./views/Appointment";
export import Doctor from "./views/Doctor";
export import Department from "./views/Department";
export import Patient from "./views/Patient";
export import Payment from "./views/Payment";
export const router = createBrowserRouter([{
  path: "/",
  element: <Navigation />,
  errorElement: <Error />,
  children: [{
    path: "/dashboard",
    element: <Dashboard />
  }, {
    path: "/appointment",
    element: <Appointment />
  }, {
    path: "/doctor",
    element: <Doctor />
  }, {
    path: "/department",
    element: <Department />
  }, {
    path: "/patient",
    element: <Patient />
  }, {
    path: "/payment",
    element: <Payment />
  }]
}]);
  export default PageRouter;