import { Router, Route, Switch } from "react-router-dom";

import history from "./config/history";
// views

import Home from "./views/Home";
import Contato from "./views/Contato";

const Routers = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </Router>
);

export default Routers;
