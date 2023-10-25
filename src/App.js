import './App.css';
import BodyComponent from './components/BodyComponent';
import HeadComponent from './components/HeadComponent';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <HeadComponent />
        <BodyComponent />
      </div>
      </Provider>
    
  );
}

export default App;
