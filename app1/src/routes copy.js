import React from "react";

const HomeScreen = React.lazy(() => import("./pages/Home"));

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
  },
];

export default routes;
