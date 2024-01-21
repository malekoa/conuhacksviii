import Dashboard from "./screens/Dashboard";
import SideBar from "./components/SideBar";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import EnvironmentSafetyDashboard from "./screens/EnvironmentSafetyDashboard"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="dashboard">
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/environmentsafety" element={<EnvironmentSafetyDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
