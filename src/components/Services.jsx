import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <section id="services" className="py-24 px-[5%] lg:px-[10%] bg-gray-50 relative">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="group relative p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 mb-6 text-primary bg-green-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <h3 className="font-heading text-xl text-gray-900 font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                        </h3>
                        <span className="block font-body text-xs text-accent font-bold uppercase tracking-wider mb-4">
                            {service.subtitle}
                        </span>
                        <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>

                        {/* Link */}
                        <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-primary hover:text-green-900 transition-colors duration-300">
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
