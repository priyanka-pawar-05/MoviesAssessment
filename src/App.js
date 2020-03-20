import React from "react";
import './App.css'
import Poster from './components/Poster'
import Filter from "./components/Filter";
import Metadata from "./components/Metadata";
function App() {                      //rendering data for Movies App
  return (
    <div className='app'>
      <h2 className="app_heading" > Movies Recommendation </h2>
      <Filter />
      <Poster />
      <Metadata />
    </div>
  );
}
export default App