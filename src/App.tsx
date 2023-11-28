import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';
import ProjectSection from './Page/Projects/ProjectSection';
// import Catalogues1 from './Page/Catalouges/Catalogues1';
import AboutUs from './Page/AboutUs/AboutUs';
import Contact from './Page/Contact/Contact';
import Navbar from './Component/Navbar';


export default class App extends Component{


  componentDidMount() {
    languagePreferencesSystem.reloadAllLanguageResources()
  }
  
  render(): React.ReactNode{

    return <div style={{backgroundColor: "black"}}>
      <Navbar/>
      <Routes>
              <Route path='/'  element={<HomePage></HomePage>}></Route>
              <Route path='/home'  element={<HomePage></HomePage>}></Route>
              <Route path='/projects'  element={<ProjectSection></ProjectSection>}></Route>
              {/* <Route path='/catalogues'  element={<Catalogues1></Catalogues1>}></Route> */}
              <Route path='/aboutUs'  element={<AboutUs></AboutUs>}></Route>
              <Route path='/contact'  element={<Contact></Contact>}></Route>
          </Routes> 
    </div>
  }
}
  
