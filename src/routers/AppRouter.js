import React from "react";
import {
    // HashRouter
  BrowserRouter 
    as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBarInicio from "../components/NavBarInicio";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function AppRouter() {
  return (
    <Router>
        <NavBarInicio/> 
            <Routes>
                <Route path="/contact" element={
                            <Contact/>
                    } />

                <Route path="/*" element={
                            <Home/>
                    }/>
            </Routes>
        <Footer/>
    </Router>
  );
}