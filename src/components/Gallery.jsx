import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { client } from '../sanityClient';

const GALLERY_QUERY = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  "images": images[].asset->url,
  description
}`;

const Gallery = ({ limit }) => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const data = await client.fetch(GALLERY_QUERY);
                setGalleryItems(data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center font-body text-gray-500">
                Chargement de la galerie...
            </div>
        );
    }

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visibleItems.map((item) => (
                        <div
                            key={item._id}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
                            onClick={() => navigate(`/galerie/${item.slug}`)}
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
                                    Galerie
                                </span>
                                <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                {limit && galleryItems.length > limit && (
                    <div className="mt-12 text-center">
                        <Link
                            to="/galerie"
                            className="inline-block px-10 py-3 bg-transparent border border-primary text-primary font-heading font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
                        >
                            Voir toute la galerie
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
