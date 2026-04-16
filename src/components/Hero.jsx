import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#01391C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Agricultural landscape"
          className="w-full h-full object-cover opacity-55"
        />
        {/* Dark overlay stronger at bottom-left where text lives */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01391C]/90 via-[#01391C]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#01391C]/80 via-transparent to-transparent"></div>
      </div>

      {/* Content — Bottom-Left */}
      <div className="relative z-10 w-full px-[5%] lg:px-[8%] pb-20 pt-32">
        {/* Elegant subtitle above headline */}
        <p className="font-body text-white/50 text-[9px] md:text-[10px] uppercase mb-5 border-l-2 border-[#5DA603] pl-4">
          Groupe chrétien de Recherche · Action pour la Promotion Humaine
        </p>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] text-white leading-[1.05] mb-6 uppercase max-w-[900px]">
          VOTRE PARTENAIRE D'EXCELLENCE EN PRODUITS AGRICOLES ET ARTISANAUX.
        </h1>

        <p className="font-body text-white/80 text-xs md:text-sm lg:text-base mb-12 max-w-[700px] leading-relaxed">
          Nous accompagnons les producteurs locaux dans la création de produits de haute qualité,
          alliant technologies innovantes et résilience climatique. Bienvenue chez GRAPHE TOGO.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#about"
            className="px-8 py-5 bg-[#5DA603] text-black font-heading font-bold uppercase tracking-widest text-base hover:bg-white transition-all duration-300 rounded-[2px]"
          >
            DÉCOUVRIR NOTRE IMPACT
          </a>
          <a
            href="/galerie"
            className="px-8 py-5 bg-transparent border-2 border-white/60 text-white font-heading font-bold uppercase tracking-widest text-base hover:border-white hover:bg-white/10 transition-all duration-300 rounded-[2px] flex items-center gap-3 group"
          >
            VOIR LA GALERIE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 4.5 7.5 7.5-7.5 7.5M3 12h18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
