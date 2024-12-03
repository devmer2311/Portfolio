import React from "react";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className="app">
      
      <main>
        <Profile />
        <Skills />
        <Projects />
        <Education />
        
      </main>
    </div>
  );
}

export default App;
