
import { Provider } from "react-redux";
import store from './redux/store';
import RouterWrapper from './routes/Router';

// A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.


function App() {
  return (
    <Provider store={store}>
      <RouterWrapper />
    </Provider>
  )
}

export default App
