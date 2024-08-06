/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
