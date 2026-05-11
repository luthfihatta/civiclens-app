import React from 'react';

const Keunggulan = () => {
  const dataKeunggulan = [
    {
      id: 1,
      title: "Mudah Digunakan",
      icon: "/img/Icon Kenapa.png", 
    },
    {
      id: 2,
      title: "Transparan & Terbuka",
      icon: "/img/Icon Kenapa-1.png",
    },
    {
      id: 3,
      title: "Data & Insight Akurat",
      icon: "/img/Icon Kenapa-2.png",
    },
    {
      id: 4,
      title: "Bersama untuk Perubahan",
      icon: "/img/Icon Kenapa-3.png", 
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-5 tracking-tight">
            Kenapa Orang-Orang Suka CivicLens?
          </h2>
          <p className="text-[#1E3A8A] text-lg leading-relaxed">
            CivicLens menarik perhatian banyak orang karena kemampuannya dalam menyajikan informasi yang akurat dan relevan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataKeunggulan.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-200 rounded-2xl py-10 px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50/50 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={`Ikon ${item.title}`} 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <h3 className="text-lg font-medium text-[#1E3A8A] px-10">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Keunggulan;