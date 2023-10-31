import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';
import ProjectSection from './Page/Projects/ProjectSection';
import Catalogue from './Page/Catalouges/Catalogue';
import AboutUs from './Page/AboutUs/AboutUs';
import Contact from './Page/Contact/Contact';


function App() {
  return (
    <div style={{backgroundColor: "black"}}>
      

      <Routes>
              <Route path='/'  element={<HomePage></HomePage>}></Route>
              <Route path='/home'  element={<HomePage></HomePage>}></Route>
              <Route path='/projects'  element={<ProjectSection></ProjectSection>}></Route>
              <Route path='/catalogues'  element={<Catalogue></Catalogue>}></Route>
              <Route path='/aboutUs'  element={<AboutUs></AboutUs>}></Route>
              <Route path='/contact'  element={<Contact></Contact>}></Route>   
          </Routes> 
    </div>
  );
}

export default App;
