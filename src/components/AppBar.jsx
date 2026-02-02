import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
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
        { name: 'À propos', path: '/#about', isAnchor: true },
        { name: 'Nos Services', path: '/#services', isAnchor: true },
        { name: 'Blog', path: '/blog', isAnchor: false },
        { name: 'Contact', path: '/#contact', isAnchor: true },
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md py-2' : 'bg-primary py-4'}`}
        >
            <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-lg md:text-xl font-heading font-bold tracking-tight z-50 text-white flex items-center gap-2 shrink-0">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto md:h-12 mr-2 hidden" /> {/* Placeholder for logo img if exists, else text */}
                    <span>GRAPHE <span className="text-accent">TOGO</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-xs lg:text-sm font-body font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-xs lg:text-sm font-body font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden md:block shrink-0">
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded bg-accent text-primary font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:bg-yellow-500 hover:shadow-md"
                    >
                        S'inscrire
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 transition-all bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-2xl font-heading font-bold text-white hover:text-accent"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-heading font-bold text-white hover:text-accent"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default AppBar;
