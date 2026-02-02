import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';

const Gallery = ({ limit }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Filter items based on limit if provided
    const visibleItems = limit ? galleryItems.slice(0, limit) : galleryItems;

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-heading text-accent text-sm font-bold uppercase tracking-widest">
                        Nos Réalisations
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mt-2">
                        Galerie Photos
                    </h2>
                    <p className="font-body text-gray-500 mt-4 max-w-2xl mx-auto">
                        Découvrez en images nos actions sur le terrain : formations, cultures innovantes et développement communautaire.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-100"
                            onClick={() => setSelectedImage(item)}
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-heading font-bold text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                {limit && galleryItems.length > limit && (
                    <div className="mt-12 text-center">
                        <Link
                            to="/galerie"
                            className="inline-block px-10 py-3 bg-transparent border-2 border-primary text-primary font-heading font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 rounded"
                        >
                            Voir toute la galerie
                        </Link>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-2/3 h-64 md:h-[60vh] bg-gray-100 relative">
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/3 p-8 flex flex-col justify-center bg-white text-left">
                            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2">{selectedImage.category}</span>
                            <h3 className="text-3xl font-heading font-bold text-primary mb-4">{selectedImage.title}</h3>
                            <p className="text-gray-600 font-body leading-relaxed">
                                {selectedImage.description}
                            </p>
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-400">© GRAPHE TOGO - Tous droits réservés</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
