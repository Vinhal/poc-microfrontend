import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

import UserProvider from "host/UserProvider";

const NotFoundScreen = () => <div>NOT FOUND </div>

const App = () => (
  <div>
    <h1>App 2</h1>
    <UserProvider>
      <React.Suspense fallback="Loading Name">
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <Route exact key={index} {...route} />
            ))}
            <Route component={NotFoundScreen} />
          </Switch>
        </BrowserRouter>
        {/* <Welcome /> */}
      </React.Suspense>
    </UserProvider>
  </div>
);

export default App;
