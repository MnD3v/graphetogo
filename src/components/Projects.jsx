import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="py-24 bg-white px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="font-heading text-[#5DA603] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                            Impact & Engagement
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#01391C] font-extrabold leading-tight">
                            NOS RÉCENTES <br /> INITIATIVES.
                        </h2>
                    </div>
                    <p className="font-body text-gray-500 text-lg max-w-md leading-relaxed">
                        Chaque projet est une étape vers une autonomie rurale durable et une agriculture résiliente face au climat.
                    </p>
                </motion.div>

                {/* Bank Details Navigation Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    id="donations"
                    className="mb-16 p-8 bg-[#01391C]/5 border-2 border-dashed border-[#01391C]/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-[#01391C] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-heading text-xl font-bold text-[#01391C]">Soutenir nos actions</h3>
                            <p className="font-body text-gray-600">Contribuez directement à nos projets via virement bancaire.</p>
                        </div>
                    </div>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-[#01391C] text-white font-bold rounded-xl hover:bg-[#5DA603] hover:text-black transition-all duration-300 shadow-xl"
                    >
                        VOIR LES COORDONNÉES
                    </a>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="group cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                            onClick={() => navigate(`/projets/${project.id}`)}
                        >
                            <div className="relative overflow-hidden rounded-[32px] aspect-[4/3] bg-gray-100 mb-8 shadow-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-8 left-8">
                                        <span className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                            Voir les détails
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-[#01391C] mb-3 group-hover:text-[#5DA603] transition-colors uppercase tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="font-body text-gray-500 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
