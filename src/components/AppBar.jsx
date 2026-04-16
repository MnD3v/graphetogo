import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Accueil', path: '/', isAnchor: false },
        { name: 'Qui sommes-nous', path: '/#about', isAnchor: true },
        { name: 'Bailleurs', path: '/#bailleurs', isAnchor: true },
        { name: 'Soutenir nos Projets', path: '/#projects', isAnchor: true },
        { name: 'Nos Services', path: '/#services', isAnchor: true },
        { name: 'Galerie', path: '/galerie', isAnchor: false },
        { name: 'Blog', path: '/blog', isAnchor: false },
    ];

    const scrollToSection = (sectionId) => {
        if (!isHome) return;
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#01391C]/95 backdrop-blur-md shadow-lg' : 'bg-[#01391C]/80'}`}
        >
            <div className="max-w-full mx-auto flex justify-between items-center h-20 border-b border-white/10">
                {/* Logo Section */}
                <div className="px-8 border-r border-white/10 h-full flex items-center shrink-0">
                    <Link to="/" className="flex items-center">
                        <img src="/images/logo.jpeg" alt="Logo" className="h-14 w-auto object-contain rounded-xl" />
                    </Link>
                </div>

                {/* Desktop Nav Section */}
                <nav className="hidden lg:flex items-center h-full flex-grow">
                    {navLinks.map((link) => (
                        <div key={link.name} className="h-full border-r border-white/10 flex items-center px-6 xl:px-8">
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-[13px] font-body font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-[13px] font-body font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="flex-grow h-full border-r border-white/10"></div>
                </nav>

                {/* Contact Us Button */}
                <div className="hidden lg:flex items-center px-8 h-full bg-[#5DA603] hover:bg-[#4d9002] transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>
                    <span className="text-[14px] font-body text-white font-bold uppercase tracking-widest whitespace-nowrap">
                        Contactez-nous
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 p-6 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`w-8 h-0.5 mb-2 transition-all bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`w-8 h-0.5 mb-2 transition-all bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-8 h-0.5 transition-all bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`fixed inset-0 bg-[#01391C] z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-4xl font-anton text-white hover:text-[#5DA603] uppercase tracking-tighter"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-anton text-white hover:text-[#5DA603] uppercase tracking-tighter"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                    <button
                        onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                        className="mt-4 px-10 py-5 bg-[#5DA603] text-white font-body font-bold text-2xl uppercase tracking-widest rounded shadow-xl"
                    >
                        Contactez-nous
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
