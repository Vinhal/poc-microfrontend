import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from "./UserContext/Provider";
import routes from "./routes";
import Welcome from './Welcome'


const App = () => (
  <div>
    <h1>Host Provider</h1>
    <UserProvider>
      <Welcome />
      <React.Suspense fallback="Loading Name">
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    </UserProvider>
  </div>
);

export default App;
