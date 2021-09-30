import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

const App = () => (
  <div>
    <h1>App 1</h1>
    <React.Suspense fallback="Loading Name">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      {/* <Welcome /> */}
    </React.Suspense>
  </div>
);

export default App;
