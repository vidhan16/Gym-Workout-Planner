import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png'
import './Navbar.css'

const Navbar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);
    setSearchTerm(searchTerm);
  };
  let [open,com]=useState(true);
  if(!com){
    document.querySelector('.options').style.visibility="hidden";
  }
  function openi(){
    if(open){
      document.querySelector('.options').style.visibility="visible";
        document.querySelector('.compact').style.border="1px solid white";
        com(false);
      }
      else{
        document.querySelector('.options').style.visibility="hidden";
        document.querySelector('.compact').style.border="0";
        com(true);
      }
    }
    let data=sessionStorage.getItem("set");
    let name="";
    if(data){
      for(let i=0;i<data.length;i++){
        if(data[i]=='@'){
          break;
        }
        name=name+data[i];
      }
    }
  return (
    <div className='sticky top-0 z-50'>
      <div className='parent flex items-center h-[7vw] w-full bg-black'>
        <div className='shift_left w-1/2 absolute flex items-center'>
        <img className='logo h-16 w-26 mr-2.5' src={Logo} alt="Image N/A" />
        <Link className='p-1.5 w-11/12 min-w-48 border-none outline-0 rounded-2xl' to={`/Muscles`}>
          <input
            className='p-1.5 w-11/12 min-w-48 border-none outline-0 rounded-2xl'
            placeholder='Search for muscle'
            type='text'
            value={searchInput}
            onChange={handleSearchChange}
          />
        </Link>
        </div>
        <div className='shift_right absolute right-3.5'>
          <Link to='/'>
            <button onClick={window.scrollTo(0,0)} className='hover:bg-zinc-800 hover:text-white'>Home</button>
          </Link>
          {/* {`/Bicep/${muscle.muscle}`} */}
          <Link to='/Muscles'>
            <button onClick={window.scrollTo(0,0)} className='hover:bg-zinc-800 hover:text-white'>Exercises</button>
          </Link>
          <Link to='/About'>
          <button onClick={window.scrollTo(0,0)} className='hover:bg-zinc-800 hover:text-white'>About Us</button>
          </Link>
          {name!="" && <Link to='/Planner'>
          <button onClick={window.scrollTo(0,0)} className='hover:bg-zinc-800 hover:text-white'>PLANNER</button>
          </Link>}
          <Link to='/Signin'>
            <button onClick={window.scrollTo(0,0)} className='hover:bg-zinc-800 hover:text-white'>
              {name!="" ? `Hi, ${name.toUpperCase().replace(/[^a-zA-Z]+/g, "")}` :'LOGIN'}
              </button>
          </Link>
          <img onClick={openi} className='compact rounded-md' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu--v1.png" alt="menu--v1"/>
        </div>
      </div>
      <div className={`options flex flex-col absolute rounded-sm right-0 z-10 w-40`}>
      <Link to='/'><button onClick={openi} className='login p-2  w-full'>Home</button></Link>
      <Link to='/Muscles'><button onClick={openi} className='p-2  w-full'>Exercises</button></Link>
      <Link to='/About'><button className='p-2  w-full'>About Us</button></Link>
          <Link to='/Signin'><button onClick={openi} className='p-2  w-full'>
          {name!="" ? `Hi, ${name.toUpperCase().replace(/[^a-zA-Z]+/g, "")}` :'LOGIN'}
            </button></Link>
        </div>
    </div>
  );
};

export default Navbar;
