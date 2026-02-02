import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] bg-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Background Decorative Elements (Optional - keep clean for now as per image) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-full -z-0 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-tr-full -z-0 opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">

        {/* Main Headline */}
        <h1 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary max-w-4xl mx-auto">
          Votre partenaire <span className="font-playfair italic font-normal text-primary/80 text-4xl md:text-5xl lg:text-6xl">en</span> <br className="hidden md:block" />
          produits <span className="font-playfair italic font-normal text-primary/80 text-4xl md:text-5xl lg:text-6xl">agricoles</span> et <span className="font-playfair italic font-normal text-primary/80 text-4xl md:text-5xl lg:text-6xl">artisanaux</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base md:text-lg text-secondary/70 mb-10 max-w-3xl mx-auto leading-relaxed">
          <strong>GRAPHE TOGO</strong> (Groupe chrétien de Recherche - Action pour la Promotion Humaine) vous accompagne dans la production, la commercialisation et la promotion de l'agroécologie. <br />
          Votre source de produits alimentaires de qualité, durables et respectueux de l'environnement.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-gray-300 text-primary font-heading font-bold uppercase tracking-wider text-sm hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 rounded"
          >
            Qui sommes-nous ?
          </a>
          <a
            href="#contact" // or a products link if available
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-heading font-bold uppercase tracking-wider text-sm hover:bg-primary/80 transition-all duration-300 rounded shadow-md flex items-center gap-2 justify-center"
          >
            Nos Produits <span className="text-lg">→</span>
          </a>
        </div>

        {/* Stats/Footer of Hero */}
        <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-bold text-primary font-heading">1996</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Fondation</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary font-heading">100%</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Réussite</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary font-heading">Agro</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Écologie</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary font-heading">Kara</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Campus</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
