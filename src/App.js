import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.min.css";
import history from "./history";
import Loader from "./Components/Global/Loader";

const HomePage = React.lazy(() => import("./Components/Pages/HomePage"));

const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
