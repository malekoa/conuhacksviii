import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import SideBar from "./components/SideBar";
import EnvironmentSafetyDashboard from "./screens/EnvironmentSafetyDashboard";
import "./App.css";

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
