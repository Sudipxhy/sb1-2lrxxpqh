import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import useScroll from '../hooks/useScroll';

export default function Navbar() {
  const isScrolled = useScroll();

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300">Movies</a>
            <a href="#" className="text-white hover:text-gray-300">New & Popular</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-white cursor-pointer" />
          <Bell className="w-6 h-6 text-white cursor-pointer" />
          <User className="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}