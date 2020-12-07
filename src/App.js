import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Detalle from './components/Detalle/Detalle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/detalle" component={Detalle} exact />


          <Link to="/home" component={Home} exact></Link>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
