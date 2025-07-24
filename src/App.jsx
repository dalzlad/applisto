import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppListoLanding from "./pages/AppListoLanding";
import "./index.css"; // Tailwind CSS import actualizado

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppListoLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
