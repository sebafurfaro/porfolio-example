import React from "react";
import Header from './components/header/header';
import { Navbar } from "./components/header/Navbar";
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Resume } from "./Pages/Resume";
import { Exps } from "./Pages/Experiance";
import { Work } from "./Pages/Work";

const App = () => {
  
  return(
    <div id="App" className="relative bg-gradient-sky">
      <Header />
      <Navbar />
      <Home />
      <Resume />
      <Services />
      <Exps />
      <Work />
      <Contact />
    </div>
  )
}

export default App;