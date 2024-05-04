import React from "react"
import { Route,Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
