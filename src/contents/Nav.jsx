import React from 'react'
import { useState } from 'react';
import {Menu , X} from 'lucide-react'
import { navItems } from './constants';
import logo from '../assets/NavbarLogo.png'



export const Nav = () => {

  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
   const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
   }
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
           <div className="flex justify-between items-center">
             <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="LOGO" className="h-10 w-10 mr-2 rounded-full" />
              <span className="text-xl tracking-tight"></span>
             </div>
             <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className = " hover:bg-neutral-700 rounded-md p-2">{item.title}</a>
                </li>
              ))}

             </ul>
             <div className="hidden lg:flex justify-center space-x-12 items-center">
               <a href="" className="py-2 px-3 border border-pink-500 rounded-md hover:scale-105 transition duration-300 ease-in-out">
                Sign In
               </a>
               <a href="" className="bg-gradient-to-r from-violet-600 to-pink-600 py-2 px-3 rounded-md hover:scale-105 transition duration-300 ease-in-out" >
                  Create Account
               </a>
             </div>
             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                  {MobileDrawerOpen ? <X/> : <Menu/>}
                </button>
             </div>
           </div>
           {MobileDrawerOpen && (
             <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center space-x-2 space-y-3 item-center lg:hidden">
               <ul>
                  {navItems.map ((items, index) => (
                     <li key={index} className="py-4">
                        <a href={items.href}>{items.title}</a>
                     </li>
                  ))}
               </ul>
               <div className="flex space-x-6">
                 <a href="#" className="py-2 px-3 border text-pink-500 rounded-md">
                  Sign In
                 </a>
                 <a href="" className="py-2 px-3 rounded-md bg-gradient-to-r from-violet-600 to-pink-500">
                   Create Account
                 </a>
               </div>
             </div>
           )}
        </div>
      </nav> 
    </>
  )
}
export default Nav;