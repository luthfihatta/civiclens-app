import React from 'react';

const Statistik = () => {
  const dataStatistik = [
    {
      id: 1,
      angka: "1.235",
      label: "Total Laporan",
      bgColor: "bg-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
          <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
        </svg>
      )
    },
    {
      id: 2,
      angka: "567",
      label: "Laporan Selesai",
      bgColor: "bg-emerald-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 3,
      angka: "89",
      label: "Sedang Diproses",
      bgColor: "bg-amber-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 4,
      angka: "4.321",
      label: "Total Vote",
      bgColor: "bg-rose-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M11.99 21.008c-.026-.008-.052-.017-.078-.026-.201-.067-1.428-.485-3.08-1.503-1.637-1.01-3.522-2.585-4.945-4.639C2.463 12.766 1.5 10.428 1.5 7.95c0-3.327 2.673-6 6-6 1.944 0 3.784.957 4.99 2.502C13.696 2.907 15.536 1.95 17.5 1.95c3.327 0 6 2.673 6 6 0 2.478-.963 4.816-2.387 6.889-1.423 2.054-3.308 3.63-4.945 4.64-1.652 1.017-2.88 1.435-3.08 1.502a.75.75 0 0 1-.077.026.155.155 0 0 1-.02.006Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="statistik" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-5 tracking-tight">
            Insight & Perkembangan Laporan Publik
          </h2>
          <p className="text-[#1E3A8A] text-lg leading-relaxed">
            Pantau perkembangan isu di lingkungan Anda melalui data terstruktur yang membantu memahami prioritas dan dampak laporan masyarakat.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataStatistik.map((item) => (
            <div 
              key={item.id} 
              className={`${item.bgColor} text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-4xl font-bold mb-2 tracking-tight">
                {item.angka}
              </h3>
              
              <p className="text-white/90 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistik;