// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Bem-vindo à página inicial.</p>
      <p>Por favor, escolha uma opção:</p>
      <ul>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
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
