import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../componnets/Layout";
import PrivateRoute from "./PravateRoute";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/404"));


interface AppRoute {
  path: string;
  element: React.ReactNode; // Use React.ReactNode instead of React.ReactElement
  children?: AppRoute[]; // Nested routes
}



const routes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
   
      // {
      //   path: "/watchlist",
      //   element: (
      //     <PrivateRoute
      //       path="/contact"
      //       element={< />}
      //     />
      //   ),
      // },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((childRoute) => (
            <Route
              key={childRoute.path}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
      </Route>
    ))}
  </Routes>
);
