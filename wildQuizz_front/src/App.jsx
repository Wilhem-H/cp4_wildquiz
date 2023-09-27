import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import AdminPage from "./pages/AdminPage";
import { Game } from "./pages/Game";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/game" element={<Game />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
