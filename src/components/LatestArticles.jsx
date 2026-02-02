import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient';

const LATEST_POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  categories[]->{title},
  mainImage{
    asset->{url}
  },
  body
}`;

function getExcerpt(body) {
    if (!body || !Array.isArray(body)) return "";
    const block = body.find(b => b._type === 'block');
    if (!block || !block.children) return "";
    return block.children.map(c => c.text).join(" ").slice(0, 150) + "...";
}

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        client.fetch(LATEST_POSTS_QUERY)
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-24 px-[5%] lg:px-[10%] bg-white relative">
                <div className="text-center text-gray-500 font-body">Chargement des actualités...</div>
            </section>
        );
    }

    if (error) {
        // Silent fail or minimal error to not break the NGO site visuals
        return null;
    }

    return (
        <section className="py-24 px-[5%] lg:px-[10%] bg-white relative">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-100 pb-8">
                <div className="text-left">
                    <span className="font-heading font-bold text-primary tracking-[2px] uppercase text-sm mb-4 block">
                        Actualités & Ressources
                    </span>
                    <h2 className="font-heading text-4xl lg:text-5xl text-gray-900 font-bold leading-tight">
                        Dernières <span className="text-primary">Publications</span>
                    </h2>
                </div>

                <Link to="/blog" className="hidden md:inline-flex items-center px-6 py-3 border border-gray-200 text-gray-700 font-bold font-body text-sm uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded">
                    Voir toute l'actualité
                </Link>
            </div>

            {/* Grid */}
            {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            to={`/blog/${article.slug.current}`}
                            key={article._id}
                            className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                {article.mainImage?.asset?.url ? (
                                    <img
                                        src={article.mainImage.asset.url}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                )}

                                {article.categories && article.categories.length > 0 && (
                                    <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
                                        {article.categories[0].title}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-body mb-4">
                                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>GRAPHE Togo</span>
                                </div>

                                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                    {article.title}
                                </h3>

                                <p className="font-body text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {getExcerpt(article.body)}
                                </p>

                                <div className="inline-flex items-center text-accent text-sm font-bold font-body uppercase tracking-wider group/link">
                                    <span className="group-hover/link:text-primary transition-colors duration-300">Lire l'article</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300 group-hover/link:text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-12 border border-dashed border-gray-200 rounded-lg">
                    <p className="mb-4">Aucune actualité disponible pour le moment.</p>
                </div>
            )}

            {/* Mobile Button */}
            <div className="mt-12 text-center md:hidden">
                <Link to="/blog" className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-700 font-bold font-body text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 rounded">
                    Voir toute l'actualité
                </Link>
            </div>

        </section>
    );
};

export default LatestArticles;
