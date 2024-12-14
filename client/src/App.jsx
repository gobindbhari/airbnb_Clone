import { useState } from 'react'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
