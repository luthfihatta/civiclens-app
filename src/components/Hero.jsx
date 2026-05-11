import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden bg-gradient-to-t from-white to-transparent" id="beranda">
      
      <div className="absolute inset-0 z-10">
        <img
          src="/img/Background.png" 
          alt="Latar Belakang Kota"
          className="w-full  object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-1 w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div className="text-white space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Platform Pelaporan Masyarakat
          </div>

          <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold leading-tight">
            Bersama Membangun <br className="hidden lg:block"/> Kota yang Lebih Baik
          </h1>

          <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
            Laporkan masalah di sekitar Anda, pantau perkembangannya, dan lihat perubahan nyata dari data transparan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition duration-300">
              Laporkan Sekarang
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lihat Peta Laporan
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <img
            src="/img/Mockup.png" 
            alt="Aplikasi CivicLens"
            className="w-full max-w-[250px] md:max-w-[320px] lg:max-w-[250px] object-contain drop-shadow-2xl relative z-10 translate-y-10 -translate-x-35"
          />
        </div>

      </div>

      
    </section>
  );
};

export default Hero;