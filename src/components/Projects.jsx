import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="font-heading text-accent text-sm font-bold uppercase tracking-widest">
                        Agir avec nous
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mt-2">
                        Soutenir nos Projets
                    </h2>
                    <p className="font-body text-gray-500 mt-4 max-w-2xl mx-auto">
                        Participez à la transformation durable des communautés rurales en finançant nos initiatives prioritaires.
                    </p>
                </div>

                {/* Initiatives Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Initiative I */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-48 bg-primary/10 relative overflow-hidden group">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-24 h-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                Initiative I
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="font-heading text-2xl text-gray-900 font-bold mb-3 leading-tight">
                                Investissons dans la force des femmes rurales
                            </h3>
                            <p className="text-gray-500 mb-6 font-body text-sm flex-grow">
                                Du champ au marché agroécologique : autonomisation économique et sociale.
                            </p>

                            <div className="bg-light rounded-lg p-4 mb-6">
                                <div className="flex items-end gap-2 mb-1">
                                    <span className="font-heading text-2xl font-bold text-primary">100 558 €</span>
                                    <span className="text-xs text-gray-400 font-bold uppercase mb-1.5">Objectif</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div className="bg-accent h-2 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500 font-body">
                                    Pour sortir <strong>2 100 femmes et jeunes</strong> de la précarité.
                                </p>
                            </div>

                            <a href="#contact" className="w-full py-4 text-center border-2 border-primary text-primary font-heading font-bold uppercase text-sm tracking-wider rounded hover:bg-primary hover:text-white transition-colors">
                                Découvrir et contribuer
                            </a>
                        </div>
                    </div>

                    {/* Initiative II */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-48 bg-primary/10 relative overflow-hidden">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-24 h-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                Initiative II
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="font-heading text-2xl text-gray-900 font-bold mb-3 leading-tight">
                                Urgence Nord Togo
                            </h3>
                            <p className="text-gray-500 mb-6 font-body text-sm flex-grow">
                                Soutien aux populations affectées par les changements climatiques et les conflits dans la première zone d’accueil.
                            </p>

                            <div className="bg-light rounded-lg p-4 mb-6">
                                <div className="flex items-end gap-2 mb-1">
                                    <span className="font-heading text-2xl font-bold text-primary">1 690 540 €</span>
                                    <span className="text-xs text-gray-400 font-bold uppercase mb-1.5">Objectif</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div className="bg-accent h-2 rounded-full" style={{ width: '5%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500 font-body">
                                    Pour soutenir <strong>6 250 déplacés et hôtes</strong> en difficulté.
                                </p>
                            </div>

                            <a href="#contact" className="w-full py-4 text-center border-2 border-primary text-primary font-heading font-bold uppercase text-sm tracking-wider rounded hover:bg-primary hover:text-white transition-colors">
                                Découvrir et contribuer
                            </a>
                        </div>
                    </div>
                </div>

                {/* Donation Details Block */}
                <div className="mt-16 bg-secondary text-white rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
                        <div className="md:w-1/3">
                            <h3 className="font-heading text-3xl font-bold text-accent mb-4">Faire un don</h3>
                            <p className="text-gray-300 font-body text-sm leading-relaxed mb-6">
                                Votre générosité nous permet d'agir concrètement sur le terrain.
                                Chaque contribution compte pour bâtir un avenir plus résilient au Togo.
                            </p>
                            <p className="font-bold text-lg text-white">Merci pour votre aide !</p>
                        </div>

                        <div className="md:w-2/3 bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 w-full">
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-3">
                                    <span className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-1 sm:mb-0">Bénéficiaire</span>
                                    <span className="text-white font-bold text-base">GRAPHE TOGO</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-3">
                                    <span className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-1 sm:mb-0">Banque</span>
                                    <span className="text-white">Union Togolaise des Banques (UTB)</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-3">
                                    <span className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-1 sm:mb-0">IBAN</span>
                                    <span className="text-accent font-bold tracking-wider">TG009 01032 051441300801-97</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between pb-1">
                                    <span className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-1 sm:mb-0">SWIFT / BIC</span>
                                    <span className="text-white tracking-wider">UNTBTGTG</span>
                                </div>
                            </div>
                            <div className="mt-6 text-xs text-gray-400 italic bg-black/20 p-3 rounded">
                                <span className="text-accent font-bold">*</span> Veuillez SVP indiquer votre nom et quelle initiative vous soutenez en libellé du virement.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
