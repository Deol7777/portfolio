import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import Home from "./pages/Home.js";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import AnimeCursor from "./components/AnimatedCursor/AnimatedCursor";
import Header from "./components/Header/Header.js";

function App() {
  const [load, upadateLoad] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

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
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
