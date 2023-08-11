import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "~/server/api/routers/MainRoutes";
import NavBar from "~/components/global/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;

 