import React from 'react';

const Fitur = () => {
  const dataFitur = [
    {
      id: 1,
      title: "Laporkan Masalah",
      desc: "Laporkan masalah di sekitar Anda dengan mudah.",
      iconColor: "text-blue-600",
      icon: (
        <img
            src="/img/Icon Fitur (1).png" 
            alt="Fitur 1"
            className="w-10 h-10 object-contain"
        />
      )
    },
    {
      id: 2,
      title: "Peta Interaktif",
      desc: "Lihat laporan di peta secara real-time dan detail.",
      iconColor: "text-emerald-500",
      icon: (
        <img
            src="/img/Icon Fitur (2).png" 
            alt="Fitur 2"
            className="w-10 h-10 object-contain"
        />
      )
    },
    {
      id: 3,
      title: "Data & Insight",
      desc: "Dapatkan insight dari data laporan untuk keputusan lebih baik",
      iconColor: "text-amber-500",
      icon: (
        <img
            src="/img/Icon Fitur (3).png" 
            alt="Fitur 3"
            className="w-10 h-10 object-contain"
        />
      )
    },
    {
      id: 4,
      title: "Pantau Perkembangan",
      desc: "Pantau status laporan dari awal hingga selesai",
      iconColor: "text-purple-500",
      icon: (
        <img
            src="/img/Icon Fitur (4).png" 
            alt="Fitur 4"
            className="w-10 h-10 object-contain"
        />
      )
    }
  ];

  return (
    <section id="fitur" className="relative py-24 bg-[#ffffff] overflow-hidden ">
      
      {/* Background Shape (Lengkungan biru muda di kiri) */}
      <div className="absolute inset-0 z-5">
        <img
          src="/img/Vector 3.png" 
          alt="Latar Belakang Kota"
          className="w-full  object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Kolom Kiri: Teks & List Fitur */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E3A8A] leading-snug mb-12">
            Pakai Perangkat Android atau IOS Anda untuk Mengakses Semua Fitur
          </h2>

          <div className="flex flex-col gap-8">
            {dataFitur.map((fitur) => (
              <div key={fitur.id} className="flex items-start gap-6 group">
                <div className="w-[72px] h-[72px] shrink-0 bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  <div className={fitur.iconColor}>
                    {fitur.icon}
                  </div>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-[22px] font-bold text-[#1E3A8A] mb-2 tracking-tight">
                    {fitur.title}
                  </h3>
                  <p className="text-gray-500/90 leading-relaxed text-[17px]">
                    {fitur.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
            src="/img/Realme 10.png" 
            alt="Mockup Aplikasi Android dan iOS"
            className="w-full h-auto max-w-[600px] lg:max-w-[700px] object-contain drop-shadow-2xl"
        />

      </div>
    </section>
  );
};

export default Fitur;