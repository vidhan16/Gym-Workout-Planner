import './App.css'
import Home_display from './components/Home_display'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Muscles from './components/Muscles'
import Bicep from './components/Bicep'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Signin from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner'
import Planner from './components/Planner'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [IsLoading]);
  return (
    <>
      {IsLoading ? <Spinner/> :<Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar setSearchTerm={setSearchTerm} /><Home_display/><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/:name" element={<><Navbar setSearchTerm={setSearchTerm} /><Home_display/><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/Muscles" element={<><Navbar setSearchTerm={setSearchTerm} /><Muscles searchTerm={searchTerm} /><Footer/></>} />
          <Route path="/Bicep/:musclename" element={<><Navbar setSearchTerm={setSearchTerm} /><Bicep/><Footer/></>} />
          <Route path="/Signin" element={<><Signin/></>}/>
          <Route path="/Spinner" element={<><Spinner/></>}/>
          <Route path="/About" element={<><Navbar/><About/><Footer/></>}/>
          <Route path="/Planner" element={<><Navbar/><Planner/><Footer/></>}/>
        </Routes>
      </div>
      </Router>}
    </>
  )
}

export default App
