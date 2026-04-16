import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import Footer from '../components/Footer';

const GALLERY_DETAIL_QUERY = `*[_type == "gallery" && slug.current == $slug][0]{
  _id,
  title,
  "mainImage": mainImage.asset->url,
  "images": images[].asset->url,
  description
}`;

const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            const imageUrl = value.asset._ref
                ? `https://cdn.sanity.io/images/5ivvh56z/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
                : '';

            return (
                <figure className="my-10">
                    <img
                        src={imageUrl}
                        alt={value.alt || "Image"}
                        className="w-full h-auto rounded-xl border border-gray-100 shadow-lg"
                        loading="lazy"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic font-body">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    block: {
        h1: ({ children }) => <h1 className="font-heading text-3xl md:text-4xl text-gray-900 font-bold mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mt-10 mb-5">{children}</h2>,
        h3: ({ children }) => <h3 className="font-heading text-xl md:text-2xl text-gray-900 font-bold mt-8 mb-4">{children}</h3>,
        h4: ({ children }) => <h4 className="font-heading text-lg md:text-xl text-primary font-bold mt-6 mb-3">{children}</h4>,
        normal: ({ children }) => <p className="font-body text-gray-700 mb-6 leading-loose text-lg">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 italic text-gray-600 bg-gray-50 pr-4 rounded-r-lg font-body">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target={value?.blank ? '_blank' : '_self'}
                rel={value?.blank ? 'noopener noreferrer' : undefined}
                className="text-primary hover:text-secondary underline transition-colors decoration-primary/30 hover:decoration-primary"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 font-body ml-4 marker:text-primary">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700 font-body ml-4 marker:text-primary">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-2">{children}</li>,
        number: ({ children }) => <li className="pl-2">{children}</li>,
    },
};

const GalleryDetail = () => {
    const { slug } = useParams();
    const [gallery, setGallery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchGalleryDetail = async () => {
            try {
                const data = await client.fetch(GALLERY_DETAIL_QUERY, { slug });
                setGallery(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching gallery detail:', error);
                setLoading(false);
            }
        };

        fetchGalleryDetail();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!gallery) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
                <h2 className="text-2xl font-heading mb-4">Galerie non trouvée</h2>
                <Link to="/galerie" className="text-primary hover:underline font-bold">Retour à la galerie</Link>
            </div>
        );
    }

    return (
        <main className="w-full bg-white min-h-screen text-gray-800 font-body">
            <div className="max-w-6xl mx-auto p-4 pt-32">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-primary font-heading text-sm font-bold tracking-[2px] uppercase block mb-3">Nos Actions en Image</span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        {gallery.title}
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Left Column: Images */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Image */}
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in"
                            onClick={() => setSelectedImage(gallery.mainImage)}
                        >
                            <img
                                src={gallery.mainImage}
                                alt={gallery.title}
                                className="w-full h-auto object-cover max-h-[70vh] hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>

                        {/* Additional Images */}
                        {gallery.images && gallery.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {gallery.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-zoom-in"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${gallery.title} - image ${idx + 2}`}
                                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Information/Description */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-b border-gray-200 pb-4">
                                    Description
                                </h2>
                                <div className="prose prose-sm font-body text-gray-600 leading-relaxed prose-headings:font-heading prose-headings:text-primary prose-strong:text-gray-900 prose-p:mb-4">
                                    <PortableText
                                        value={gallery.description}
                                        components={portableTextComponents}
                                    />
                                </div>
                            </div>

                            <div className="p-8 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20">
                                <h3 className="font-heading font-bold text-xl mb-4">Agissons ensemble</h3>
                                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                    Soutenez nos projets de développement rural et contribuez à un avenir durable pour les communautés du Togo.
                                </p>
                                <Link to="/#contact" className="block w-full py-3 bg-white text-primary font-heading font-bold text-center rounded-lg hover:bg-accent hover:text-white transition-all shadow-lg">
                                    Faire un don
                                </Link>
                            </div>

                            <div className="text-center pt-8 border-t border-gray-100 mt-8">
                                <p className="text-xs text-gray-400 font-body tracking-wider">© GRAPHE TOGO - IMPACT & DURABILITÉ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative max-w-7xl max-h-screen flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Full display"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </main>
    );
};

export default GalleryDetail;
