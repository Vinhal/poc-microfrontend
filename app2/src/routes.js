import React from "react";

const DashboardScreen = React.lazy(() => import("./pages/Dashboard"));

const routes = [
  {
    exact: true,
    path: "/dashboard",
    component: DashboardScreen,
  },
];

export default routes;
