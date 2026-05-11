import React from 'react';
import { motion } from 'framer-motion';
import { partnersData } from '../data/partnersData';
import { institutionalPartners } from '../data/institutionalPartners';

const Partners = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="bailleurs" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 bg-primary/5 rounded-full">
                        <span className="text-primary font-heading text-xs font-bold uppercase tracking-[0.2em]">
                            Confiance & Expertise
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-bold mb-6">
                        Résultats & Bailleurs
                    </h2>
                    <p className="font-body text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        Des partenariats solides pour des transformations concrètes sur le terrain.
                        Voici les résultats obtenus grâce au soutien de nos bailleurs.
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {partnersData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold font-heading text-primary uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                                    {project.period}
                                </span>
                                <div className="h-10 w-10 bg-accent/20 rounded-2xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307L21.75 4.5M21.75 4.5H16.5M21.75 4.5v5.25" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 leading-tight">
                                {project.title}
                            </h3>

                            <div className="space-y-4 flex-grow mb-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Partenaires Financiers</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.donors.map((donor, idx) => (
                                            <span key={idx} className="text-sm text-gray-700 font-medium">
                                                {donor}{idx < project.donors.length - 1 ? ',' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                                    <span className="text-[9px] font-black text-gray-400 uppercase block mb-1">Montant</span>
                                    <span className="text-sm font-bold text-primary">{project.budget}</span>
                                </div>
                                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                                    <span className="text-[9px] font-black text-gray-400 uppercase block mb-1">Résultats</span>
                                    <span className="text-sm font-bold text-gray-900">{project.beneficiaries}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Institutional Partners Grid */}
                <div className="pt-20 border-t border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="font-heading text-2xl md:text-3xl text-gray-900 font-bold mb-4">
                            Nos Partenaires Institutionnels
                        </h3>
                        <p className="text-gray-500 font-body">Ils nous font confiance à travers nos différentes missions.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {institutionalPartners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300 h-40"
                            >
                                <div className="h-full w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <motion.img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
