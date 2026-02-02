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

                        <div className="mt-10 flex gap-6">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                                <div className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-heading font-bold text-text">Agroécologie</div>
                                    <div className="text-sm text-gray-500">Innovation agricole durable</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                                <div className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-heading font-bold text-text">Communauté</div>
                                    <div className="text-sm text-gray-500">Approche participative</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Placeholder Section - Since we don't have the specific pastor image anymore, this stays abstract or we could put a nature image */}
                    <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                            {/* Placeholder for About Image - could be fields or team */}
                            <div className="w-full h-full flex items-center justify-center bg-secondary text-white p-10 text-center">
                                <div>
                                    <span className="mb-4 block text-primary/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </span>
                                    <p className="font-heading font-bold text-xl">GRAPHE TOGO</p>
                                    <p className="font-body text-sm opacity-80 mt-2">Engagés depuis 1996</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
