import React from 'react';
import './App.css';
import AppRouter from "router/appRouter";
import { withRouter } from "react-router-dom";

const App = () => (
  <div className="App" style={{height: "100vh", background: "#fffcf5"}}>
    <AppRouter />
  </div>
);

export default withRouter(App);