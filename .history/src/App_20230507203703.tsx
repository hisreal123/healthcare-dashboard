import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./components/Misc/Navigation";

import Error from "./routes/Error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";
import Doctor from "./views/Doctor";
import Department from "./views/Department";
import Payment from "./views/Payment";
import Help from "./views/Help";
import { Provider } from "react-redux";
import store from './redux/store';

import Router  from './routes/Router';

// A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.




function App() {
  return (
    <Provider store={store}>
     <Router />
    </Provider>
  )
}

export default App
