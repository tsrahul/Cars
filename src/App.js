import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Loader from "./Components/Global/Loader";
import "./styles/main.css";

const HomePage = React.lazy(() => import("./Components/Pages/HomePage"));
const cartPage = React.lazy(() => import("./Components/BookCart/cartPage"));

const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={cartPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
