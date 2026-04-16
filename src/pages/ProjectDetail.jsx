import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-body">
                <h2 className="text-3xl font-heading text-gray-900 mb-4">Projet non trouvé</h2>
                <Link to="/" className="text-primary hover:underline font-bold transition-all">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-body">
            {/* Header / Hero */}
            <div className="relative py-32 px-[5%] lg:px-[10%] overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

                <div className="relative z-10 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-sm text-white/10 hover:text-white mb-8 transition-colors font-bold uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Retour aux projets
                    </Link>
                    <span className="inline-block font-heading font-bold text-accent tracking-[2px] uppercase text-xs bg-white/10 px-3 py-1 rounded backdrop-blur-sm mb-6">
                        {project.name}
                    </span>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-md">
                        {project.title}
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-medium border-l-4 border-accent pl-6">
                        {project.subtitle}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-[5%] lg:px-[10%] py-20 bg-white">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 space-y-12">
                        {/* Financial Card */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                            <div className="space-y-2">
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Montant du projet</span>
                                <div className="text-4xl font-bold text-primary">{project.goal}</div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-tighter">à collecter avec vous</p>
                            </div>
                            <a href="/#donations" className="w-full md:w-auto px-10 py-5 bg-accent text-primary font-heading font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 rounded-xl shadow-xl text-center">
                                Je participe à sauver des vies
                            </a>
                        </div>

                        {/* Story / Why */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-1 bg-accent rounded-full"></div>
                                <h2 className="font-heading text-3xl text-gray-900 font-bold">
                                    Pourquoi participez ?
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                {project.whyParticipate.text}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mt-12">
                                {project.whyParticipate.challenges.map((challenge, index) => (
                                    <div key={index} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col items-start gap-4 transition-all hover:shadow-md">
                                        <div className="text-primary font-bold">
                                            {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>}
                                            {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>}
                                            {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>}
                                            {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                                        </div>
                                        <h4 className="font-heading text-lg font-bold text-gray-900 tracking-tight">{challenge.title}</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {challenge.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Impact */}
                        <section className="space-y-6 bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
                            <h2 className="font-heading text-3xl text-gray-900 font-bold">À quoi servira votre contribution ?</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.impact.text}
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                                {project.impact.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            {project.impact.footer && (
                                <p className="pt-4 text-sm italic text-gray-500">
                                    {project.impact.footer}
                                </p>
                            )}
                        </section>
                        {/* Final CTA */}
                        <div className="flex justify-center pt-8">
                            <a href="/#donations" className="px-12 py-5 bg-primary text-white font-heading font-bold uppercase tracking-[3px] rounded-xl shadow-2xl hover:bg-accent hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                                Contribuer maintenant
                            </a>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-96 space-y-8">
                        {/* Location Card */}
                        <div className="bg-primary text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="font-heading font-bold text-accent text-xl mb-4 border-b border-white/10 pb-4">Lieu de l'initiative</h3>
                            <div className="space-y-4">
                                {project.location.map((loc, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                        <span className="font-bold">{loc}</span>
                                    </div>
                                ))}
                                <p className="text-sm text-white/60 pt-4 italic border-t border-white/5 mt-4">
                                    {project.locationNote}
                                </p>
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-heading font-bold text-gray-900 text-xl mb-6">Organe de mise en œuvre</h3>
                            <ul className="space-y-6">
                                {project.partners.map((partner, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                            <span className="text-primary font-bold">{partner.icon}</span>
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium">{partner.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
