import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
// import CreateSchedule from "./components/createSchedule/CreateSchedule";

const lazyCreateSchedule = React.lazy(() =>
  import("./components/createSchedule/createSchedule")
);

function Routes() {
  return (
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/CreateSchedule" component={lazyCreateSchedule} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}
export default Routes;
