import Header from "./components/layouts/Header";
import Login from './components/Login';
import Registro from "./components/Registro";
import Inicio from './components/Inicio';
import Perfil from "./components/Perfil";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/inicio-sesion" component={Registro} />
        <Route exact path="/mi-cuenta" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
