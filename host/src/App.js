import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from "./UserContext/Provider";
import app1Routes from "app1/routes";
import Home from "./Home";

console.log({ app1Routes });

const routes = [...app1Routes];

const App = () => (
  <div>
    <h1>Host Provider</h1>
    <UserProvider>
      <React.Suspense fallback="Loading Name">
        <BrowserRouter>
        <Home />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
        {/* <Welcome /> */}
      </React.Suspense>
    </UserProvider>
  </div>
);

export default App;
