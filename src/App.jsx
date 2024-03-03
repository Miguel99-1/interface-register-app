// App.jsx
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Index from "./Index.jsx";



function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/"> 
          <Index />
          </Route>
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
