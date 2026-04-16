import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-white py-20 px-4 md:px-8">
            <div className="mx-auto max-w-[1300px] relative overflow-hidden rounded-[40px] bg-[#01391C] flex flex-col lg:flex-row min-h-[600px] shadow-2xl">

                {/* Left Content Area */}
                <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
                    {/* Subtitle Pill */}
                    <div className="inline-block w-fit mb-8">
                        <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white/90 text-sm font-medium border border-white/20">
                            Propulser le succès local
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-8 max-w-[600px]">
                        Bâtir un avenir plus durable avec l'agroécologie
                    </h2>

                    {/* Description text */}
                    <p className="font-body text-white/70 text-lg leading-relaxed mb-12 max-w-[550px]">
                        Nous nous engageons aux côtés des communautés rurales pour cultiver des solutions innovantes,
                        renforcer l'autonomie technique et construire une résilience durable face aux défis de demain.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white text-[#01391C] font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
                        >
                            Commencer
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            En savoir plus
                        </a>
                    </div>
                </div>

                {/* Right Image Area */}
                <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-full">
                    <img
                        src="/images/about.jpg"
                        alt="Impact Agriculture"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Floating Stats Card Overlay */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[20%] z-20 hidden lg:block">
                        <div className="bg-white p-8 rounded-[25px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 min-w-[300px]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-400 text-sm font-medium">Bilan 2024</span>
                                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg text-gray-600 text-xs flex items-center gap-2 cursor-pointer">
                                    Impact
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="text-gray-500 text-sm block mb-1">Femmes Rurales Accompagnées</span>
                                <span className="text-4xl font-bold text-gray-900">2 100 +</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-[#5DA603]/10 text-[#5DA603] px-3 py-1-5 rounded-lg text-sm font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307L21.75 4.5M21.75 4.5H16.5M21.75 4.5v5.25" />
                                </svg>
                                Progrès communautaire durable
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
