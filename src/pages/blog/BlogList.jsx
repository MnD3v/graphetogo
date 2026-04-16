import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanityClient";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  categories[]->{title},
  mainImage{
    asset->{url}
  }
}`;

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        client.fetch(POSTS_QUERY)
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("Erreur lors du chargement des posts :", error);
            });
    }, []);

    const displayedPosts = showAll ? posts : posts.slice(0, 3);
    const hasMorePosts = posts.length > 3;

    return (
        <section id="blog" className="pt-32 pb-20 bg-background min-h-screen font-body">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 pt-10">
                    <Link to="/" className="text-sm font-bold text-gray-500 hover:text-primary mb-4 inline-block tracking-wide uppercase">&larr; Retour à l'accueil</Link>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
                        Actualités & Ressources
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-6"></div>
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedPosts.map((post) => (
                        <div key={post._id}>
                            <Link
                                to={`/blog/${post.slug.current}`}
                                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    {post.mainImage?.asset?.url ? (
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Category */}
                                    <div className="mb-4">
                                        <span className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.categories && post.categories.length > 0 ? post.categories[0].title : "Article"}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary line-clamp-2 transition-colors font-heading">
                                        {post.title}
                                    </h3>

                                    <div className="mt-auto flex items-center gap-2 text-sm text-gray-400 font-medium">
                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>GRAPHE Togo</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {hasMorePosts && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
                        >
                            {showAll ? "Voir moins" : "Voir plus d'articles"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
