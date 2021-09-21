import Header from "./components/layouts/Header";
import Login from './components/Login';
import Registro from "./components/Registro";
import Inicio from './components/Inicio';
import Perfil from "./components/Perfil";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Reducer

import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Router>
      <Provider store={store}>  
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/inicio-sesion" component={Login} />
          <Route exact path="/crear-cuenta" component={Registro} />
          <Route exact path="/mi-cuenta" component={Perfil} />
        </Switch>
      </Provider>  
    </Router>
  );
}

export default App;
