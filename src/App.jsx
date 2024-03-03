// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <Router>
      <div className="app">
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      </div>
    </Router>
  );
}

export default App;
