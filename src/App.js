import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavbarWrapper/Navbar";
import Home from "./Components/Pages/Home/HomeWrapper/Home";
import Destination from "./Components/Pages/Destination/DestinationWrapper/Destination";
import Crew from "./Components/Pages/Crew/CrewWrapper/CrewWrapper";
import Technology from "./Components/Pages/Technology/TechnologyWrapper/Technology";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destination" exact element={<Destination />} />
          <Route path="/crew" exact element={<Crew />} />
          <Route path="/technology" exact element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
