import React from "react"
import { Route,Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Event from "./Components/Event/Event";
import Client from "./Components/Client/Client";
import Book from "./Components/Books/Book";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="team"  element={<Team/>} />
          <Route path="event" element={<Event/>}/>
          <Route path="client" element={<Client/>}/>
          <Route path="books" element={<Book/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
