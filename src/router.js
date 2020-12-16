import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "./config/history";
// views

import Post from "./views/Post";
import Networking from "./views/Networking";
import Panel from "./views/Panel";
import Profile from "./views/Profile";

import SignIn from "./views/Sign/SignIn";
import { isAuthenticated } from "./config/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./store/User/user.action";
// import { useSelector } from "react-redux";



const Routers = () => {
  const dispatch = useDispatch();
  // Autenticação através de REDUX com REHYDRATE PERSIST
   const isAutheticated_redux  = useSelector((state) => !!state.auth.token);
  // console.log("isAutheticated", isAutheticated);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);


  const AdminRoute = ({ ...rest }) => {
    //TODO
  if (!isAuthenticated() || !isAutheticated_redux) {
    return <Redirect to="/signin" />;
  }
  return <Route {...rest} />;
};

  return (
    <Router history={history}>
      <Switch>
        <AdminRoute exact path="/" component={Post} />
        <AdminRoute exact path="/minharede" component={Networking} />
        <AdminRoute exact path="/painel" component={Panel} />
        <AdminRoute exact path="/perfil" component={Profile} />

        {/* --------------Sign --------------*/}

        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routers;
