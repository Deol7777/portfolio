import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import Home from "./pages/Home.js";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Header from "./components/Header/Header.js";

function App() {
  const [load, upadateLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Preloader load={load} />
        <Header/>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
