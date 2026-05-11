import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Keunggulan from './components/Keunggulan';
import Fitur from './components/Fitur'
import Statistik from './components/Statistik';
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      <Navbar/>

      <main>
        <section id="beranda">
          <Hero/>
        </section>

        <section id="keunggulan">
          <Keunggulan/>
        </section>

        <section id="fitur">
          <Fitur/>
        </section>

        <section id="statistik">
          <Statistik />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;