import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react';
import Header from './Component/Header/Header/Header';
import About from './Component/About/About';
import Banner from './Component/Banner/Banner';

function App() {
  return (
    <div className="">
      <Router>
        <Fragment>
          <Header></Header>
          <Home></Home>
          <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/banner" element={<Banner/>}/>
          <Route exact path="/about" element={<About/>}/>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
