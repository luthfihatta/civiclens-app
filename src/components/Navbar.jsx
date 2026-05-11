import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        <div className="flex items-center gap-2 font-bold text-xl cursor-pointer ">
          <img src="/img/Logo.png" alt="CivicLens Logo" className="w-auto h-10"/>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#beranda" className="hover:text-gray-200 transition">Beranda</a></li>
          <li><a href="#keunggulan" className="hover:text-gray-200 transition">Keunggulan</a></li>
          <li><a href="#fitur" className="hover:text-gray-200 transition">Fitur</a></li>
          <li><a href="#statistik" className="hover:text-gray-200 transition">Statistik</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button className="hover:text-gray-200 transition">Masuk</button>
          <button className="bg-white text-brand-primary px-5 py-2 rounded-full shadow hover:bg-gray-100 transition">
            Daftar
          </button>
        </div>

        <button className="md:hidden block text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;