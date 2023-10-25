import './App.css';
import BodyComponent from './components/BodyComponent';
import HeadComponent from './components/HeadComponent';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchComponent from './components/WatchComponent';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyComponent />,
    children:[
      {
        path: "",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchComponent />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <HeadComponent />
        <RouterProvider router={appRouter} />
      </div>
      </Provider>
    
  );
}

export default App;
