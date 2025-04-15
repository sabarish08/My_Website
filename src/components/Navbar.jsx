import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const [showMenu,setShowMenu]= useState(false)
  const navigate = useNavigate()
  const menuArray = [
   
    {
        name : "Home",
        icon: <IoMdHome />,
        pathName: ''
    },
    {
        name : "About",
        icon: <FaCircleInfo />,
        pathName: 'about'
    },
    {
        name : "Contact",
        icon:  <FaPhoneSquareAlt />,
        pathName: 'contact'
    },
    {
        name : "Resume",
        icon: <FaNoteSticky />,
        pathName: 'resume'
    },
    // {
    //     name : "Linkedin",
    //     icon: <FaLinkedin />,
    //    pathName: 'https://linkedin.com/in/sabarish-g-1a225591'
    // },
  ]

  return (
    <div className={`group bg-gray-700 h-screen text-right transition-all duration-700 ease-in-out ${showMenu ? 'w-[12%]' : 'w-[6%]' }` }>
    {/*  */}
        
            <div onClick={() => {setShowMenu(!showMenu)}} className={`text-white cursor-pointer flex gap-10 items-center p-3 relative mx-3`} >
                
                    <IoMdMenu className='text-2xl'  />
                    {/* <li className= {`${showMenu ? 'block opacity-100' : 'hidden opacity-0' } text-sm list-none `}> Menu </li> */}
            </div>
            
            <ul className={`text-white text-sm flex flex-col `}>
                {
                    menuArray.map((menu,idx) => {

                        return <div onClick={() => navigate(`/${menu.pathName}`)} key={idx} className='flex items-center gap-3 px-2 py-3  cursor-pointer hover:border border-amber-50 mx-3 '>
                            <div className=' text-2xl'> {menu.icon}</div>
                            
                        </div>
                    })
                }
                 <div  className='flex items-center gap-3 px-2 py-3  cursor-pointer hover:border border-amber-50 mx-3 '>
                            <div className=' text-2xl'> <FaLinkedin /></div>
                            <a href='www.linkedin.com/in/sabarish-g-1a225591'>
                        
                        <li className= {`text-sm ${showMenu ? 'block ' : 'hidden ' } `}> Linkedin </li>
                        </a>
                            
                        </div>
                
                           
            </ul>
    </div>
  )

}
export default Navbar