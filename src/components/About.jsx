import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-[5%] lg:px-[10%] bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-0"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Section */}
                    <div className="flex-1 w-full lg:w-1/2 order-2 lg:order-1">
                        <span className="font-heading text-primary font-bold tracking-[2px] uppercase text-sm mb-4 block">
                            Qui sommes-nous ?
                        </span>
                        <h2 className="font-heading text-4xl lg:text-5xl text-text font-bold mb-8 leading-tight">
                            Promouvoir l'humain par <span className="text-primary">l'éducation et l'action</span>
                        </h2>

                        <div className="space-y-6 font-body text-gray-600 text-lg leading-relaxed">
                            <p>
                                <strong>GRAPHE</strong> (Groupe chrétien de Recherche Action pour la Promotion Humaine par l'Éducation) est une Organisation Non Gouvernementale engagée pour le développement rural.
                            </p>
                            <ul className="list-disc list-outside ml-4 space-y-2">
                                <li><strong>Riziculture Résiliente :</strong> Nous accompagnons les producteurs dans la production du riz résilient au climat.</li>
                                <li><strong>Agroécologie Innovante :</strong> Nous faisons la promotion des technologies innovantes telles que le SRI (Système de Riziculture Intensif), la production du compost, du Bokashi et de l'engrais liquide Bio.</li>
                                <li><strong>Accompagnement Personnalisé :</strong> Nous guidons les producteurs dans la production et la commercialisation avec des conseils sur mesure pour garantir leur succès.</li>
                            </ul>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-gray-100">
                            <div className="text-center">
                                <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary">1996</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Fondation</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary">100%</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Réussite</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary">Agro</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Écologie</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary">Kara</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Campus</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Placeholder Section - Since we don't have the specific pastor image anymore, this stays abstract or we could put a nature image */}
                    {/* Images Composition */}
                    <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-2 relative">
                        <div className="relative w-full max-w-lg mx-auto h-[400px] lg:h-[500px]">
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image (Back) */}
                            <div className="absolute top-0 right-0 w-[70%] h-[85%] rounded-2xl overflow-hidden shadow-lg border border-gray-100/50">
                                <img
                                    src="/images/galerie/galerie-1.jpg"
                                    alt="Formation au champ"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>

                            {/* Secondary Image (Front - Overlapping) */}
                            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src="/images/galerie/galerie-3.png"
                                    alt="Rencontre communautaire"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute top-12 left-4 md:left-0 bg-white p-5 rounded-2xl shadow-xl max-w-[160px] border border-gray-50 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                <p className="font-heading font-bold text-primary text-3xl text-center">30</p>
                                <p className="font-heading font-bold text-text text-sm text-center">Ans d'expérience</p>
                                <p className="text-xs text-center text-gray-400 mt-1">Depuis 1996</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
