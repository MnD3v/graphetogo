import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Footer from '../components/Footer';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-body">
                <h2 className="text-3xl font-heading text-gray-900 mb-4">Service non trouvé</h2>
                <Link to="/" className="text-primary hover:underline font-bold">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-body">
            {/* Header / Hero for Service */}
            <div className="relative py-32 px-[5%] lg:px-[10%] overflow-hidden bg-primary text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

                <div className="relative z-10 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-sm text-white/80 hover:text-white mb-8 transition-colors font-bold uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Retour
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 text-primary bg-white rounded-full flex items-center justify-center shadow-lg">
                            {service.icon}
                        </div>
                        <span className="font-heading font-bold text-accent tracking-[2px] uppercase text-sm bg-white/10 px-3 py-1 rounded backdrop-blur-sm">
                            {service.subtitle}
                        </span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="px-[5%] lg:px-[10%] py-16 bg-white min-h-[50vh]">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 max-w-3xl">
                        <div className="text-lg text-gray-600 leading-relaxed font-body space-y-4">
                            <p className="font-bold text-xl text-gray-800 mb-6 border-l-4 border-primary pl-4">
                                {service.description}
                            </p>
                            <p>
                                {service.fullDescription || "Nos équipes travaillent activement pour apporter des solutions concrètes et pérennes dans ce domaine. Nous croyons en une approche participative où chaque bénéficiaire est acteur de son propre développement."}
                            </p>
                            <p>
                                Grâce à l'appui de nos partenaires et à l'engagement de nos bénévoles, nous avons pu impacter positivement de nombreuses vies. Rejoignez-nous pour amplifier cet impact.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-100">
                            <h3 className="font-heading text-2xl text-gray-900 font-bold mb-4">Agissons ensemble</h3>
                            <p className="text-gray-500 mb-8">
                                Vous souhaitez soutenir ce projet ou en savoir plus sur nos actions de terrain ?
                            </p>
                            <Link to="/#contact" className="px-8 py-4 bg-primary text-white font-heading font-bold uppercase tracking-wider hover:bg-green-900 transition-all duration-300 rounded-lg shadow-lg">
                                Nous Contacter
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar / Context */}
                    <div className="w-full lg:w-80 space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-heading font-bold text-gray-900 mb-4">Autres domaines</h4>
                            <ul className="space-y-3">
                                {servicesData.filter(s => s.slug !== slug).map(s => (
                                    <li key={s.slug}>
                                        <Link to={`/services/${s.slug}`} className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
