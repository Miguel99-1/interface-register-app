// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Index from "./Index.jsx";



function App() {
  return (
    <Router>
      <Routes>
      <div className="app">
      <Route path="/" element={<Index />} />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      </div>
      <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
