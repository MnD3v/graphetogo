import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <section id="services" className="py-24 px-[5%] lg:px-[8%] bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="font-heading font-bold text-primary tracking-[2px] uppercase text-sm mb-3 block">
                    Nos Actions
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl text-gray-900 font-bold mb-6">
                    Domaines d'Intervention
                </h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto relative z-10">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="group relative p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex flex-col items-center text-center"
                    >
                        {/* Icon Container */}
                        <div className="w-20 h-20 mb-8 text-primary bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <h3 className="font-heading text-2xl text-gray-900 font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-accent/10 rounded-lg mb-5">
                            <span className="block font-body text-[10px] text-primary font-bold uppercase tracking-widest">
                                {service.subtitle}
                            </span>
                        </div>
                        <p className="font-body text-gray-500 text-base leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>

                        {/* Link */}
                        <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors duration-300">
                            En savoir plus
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
