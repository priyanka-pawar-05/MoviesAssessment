import React from "react";
import './App.css'
import Poster from './components/Poster'
import Filter from "./components/Filter";
import Metadata from "./components/Metadata";
function App() {                      //rendering data for Movies App
  return (
    <div className='app'>
      <Filter />
      <Poster />
      <Metadata />
    </div>
  );
}
export default App