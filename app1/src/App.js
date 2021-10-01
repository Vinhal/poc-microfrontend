import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UserProvider from 'host/UserProvider'
import routes from "./routes";

const App = () => (
  <div>
    <h1>App 1</h1>
    <UserProvider>
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
