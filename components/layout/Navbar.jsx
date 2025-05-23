'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      scrolled 
        ? 'bg-green-800 shadow-lg border-b border-green-600/30' 
        : 'bg-transparent backdrop-blur-md shadow-lg border-b border-black/20'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Vellezrit Gjoka</h1>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <div className="group relative">
            <Link href="/" className="text-white font-medium hover:text-green-200 flex items-center">
              Home
            </Link>
          </div>
          <Link href="/gallery" className="text-white font-medium hover:text-green-200">Gallery</Link>
          <Link href="/about" className="text-white font-medium hover:text-green-200">About Us</Link>
          <Link href="/contact" className="text-white font-medium hover:text-green-200">Contact Us</Link>
        </div>
        
        {/* Phone Number */}
        <div className="hidden md:flex items-center bg-green-700 rounded-full px-4 py-2">
          <div className="mr-2 bg-green-600 p-2 rounded-full">
            <Phone className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-white text-xs">Call Us Any Time</div>
            <div className="text-white font-bold">(+01) 789 987 645</div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;