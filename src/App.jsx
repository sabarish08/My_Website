import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { IoMdMenu } from "react-icons/io";
import About from './components/About'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';


const App = () => {

  const [showMenu,setShowMenu]= useState(true)
  const [darkMode, setDarkMode] = useState(false)

  console.log(showMenu);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
   
      <div className={`${darkMode ? 'flex dark bg-slate-950 text-white min-h-screen' : 'flex bg- text-White black min-h-screen'}`} >
      <Navbar />
      {/* <div className='w-full flex flex-col items-center gap-6 p-8 text-center'>


  
  
</div> */}
        <div 
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={toggleDarkMode}
          >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </div> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        
     
      </div>
    
    
  )
}

export default App
