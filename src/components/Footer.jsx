import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-100 font-body">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/images/logo.jpeg" alt="GRAPHE Togo Logo" className="h-12 w-auto rounded-xl" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Groupe chrétien de Recherche Action pour la Promotion Humaine par l'Éducation. Œuvrer pour un développement durable et inclusif.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-primary text-lg font-bold mb-6 uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Accueil</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">À Propos</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Nos Projets</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-primary text-lg font-bold mb-6 uppercase tracking-wider">Nos Actions</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Agroécologie</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Formation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Eau & Santé</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">Développement Communautaire</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-primary text-lg font-bold mb-6 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600 text-sm">
                                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Lomé, Togo</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 text-sm">
                                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>grapheasso@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 text-sm">
                                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+228 90 09 43 83 / 98 30 64 09</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} GRAPHE Togo - ONG à but non lucratif.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary text-xs transition-colors">Mentions Légales</a>
                        <a href="#" className="text-gray-400 hover:text-primary text-xs transition-colors">Politique de Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
