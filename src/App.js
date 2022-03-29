import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Dashboard from "./Pages/dashboard";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
