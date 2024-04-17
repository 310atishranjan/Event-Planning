import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import { Toaster } from "react-hot-toast";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Hero/>
          <Services/>
          <About/>
          <Contact/>
          <Footer/>
          <Toaster/>
      </Router>
    </>
  )
}

export default App
