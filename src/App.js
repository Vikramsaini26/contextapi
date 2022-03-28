import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Dashboard from "./Pages/dashboard";
import { UserDetailProvider } from "./context";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserDetailProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </UserDetailProvider>
    </div>
  );
}

export default App;
