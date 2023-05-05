

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouterouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement: <Error />,
  
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/appointment",
          element: <Appointment />,
        },
        {
          path: "/doctor",
          element: <Doctor />,
        },
        {
          path: "/department",
          element: <Department />,
        },
        {
          path: "/patient",
          element: <Patient />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
      ]
  
    }
  ]);
  
  