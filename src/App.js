import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="app__container">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
