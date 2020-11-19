import { Router, Route, Switch } from "react-router-dom";

import history from "./config/history";
// views

import Home from "./views/Home";
import Contato from "./views/Contato";
import SignIn from "./views/Sign/SignIn";

const Routers = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  </Router>
);

export default Routers;
