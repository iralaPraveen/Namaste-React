import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Contacts from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Search from "./components/Search";
import PraveenClass from "./components/PraveenClass";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Search />

      <Body />
      <Outlet />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = document.getElementById("root");
const ele = ReactDom.createRoot(root);

ele.render(<RouterProvider router={AppRouter} />);
