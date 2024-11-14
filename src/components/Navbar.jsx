import React, { useState } from "react";
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health Science',
    'Sports',
    'Technology'
  ]

  return (
    <div className="relative">
      {/* Main Navigation Bar */}
      <nav className="flex items-center justify-between p-3 md:p-4 bg-white shadow-md">
        <button onClick={toggleMenu} className="text-black hover:text-gray-700">
          <Menu className="h-8 w-8" />
          <span className="sr-only">Open menu</span>
        </button>
        <div className="flex-1 flex flex-col items-center">
          <div className="text-lg md:text-xl font-bold">LogIQids</div>
          <div className="text-xs md:text-sm">Assignment</div>
        </div>
        <div className="w-6"></div> 
      </nav>

      {/* Side Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-[20%] bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-zinc-700">
          <h2 className="text-xl text-slate-200 font-bold">Categories</h2>
          <button onClick={toggleMenu} className="text-gray-400 hover:text-gray-200">
            <X className="h-8 w-8" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <ul className="p-4 flex flex-col gap-2">
          {categories.map((category) => (
            <li key={category}>
              <button className="flex flex-col p-2 w-full hover:bg-gray-800 rounded-md">
                <a href="/" className="text-slate-100 text-left">
                  {category}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}