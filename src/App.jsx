import './App.css'
import Home_display from './components/Home_display'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import Muscles from './components/Muscles'
import Bicep from './components/Bicep'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Signin from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar setSearchTerm={setSearchTerm} /><Home_display/><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/:name" element={<><Navbar setSearchTerm={setSearchTerm} /><Home_display/><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/Muscles" element={<><Navbar setSearchTerm={setSearchTerm} /><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/Bicep/:musclename" element={<><Navbar setSearchTerm={setSearchTerm} /><Bicep/><Footer/></>} />
          <Route path="/Signin" element={<><Signin/></>}/>
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
