
import {Route} from 'react-router-dom';

import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Logo from './assets/image/logo.png';

import Login from './container/Login/Login';
import Register from './container/Register/Register';
import MainPage from './container/MainPage/Mainpage';
import NewPostContainer from './container/NewPostContainer/NewPostContainer';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <img src={Logo} alt="logo" className="logo"/>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/home" component={MainPage}/>
          <Route path="/new-post" component={NewPostContainer}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
