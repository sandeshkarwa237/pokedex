import React from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Header } from "./components/common/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ItemDetailPage } from "./pages/ItemDetailPage/ItemDetailPage";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "details", element: <ItemDetailPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <App />
        </div>
      </div>
    </Router>
  );
};

export default AppWrapper;
