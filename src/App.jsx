import Dashboard from "./screens/Dashboard";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <SideBar/>
      </div>

      <div className="dashboard">
        <Dashboard/>
      </div>

    </div>
  );
}

export default App;
