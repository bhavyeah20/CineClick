import "./app.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
