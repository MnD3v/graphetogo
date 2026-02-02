import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import Footer from "../../components/Footer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url,
  body,
  author->{
    name,
    image {
      asset->{ url }
    },
    bio
  }
}`;

const RELATED_POSTS_QUERY = `*[_type == "post" && slug.current != $slug && defined(slug.current)]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url
}`;

const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            const imageUrl = value.asset._ref
                ? `https://cdn.sanity.io/images/l7k8ksvl/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
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

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            client.fetch(POST_QUERY, { slug }),
            client.fetch(RELATED_POSTS_QUERY, { slug })
        ]).then(([postData, relatedData]) => {
            setPost(postData);
            setRelatedPosts(relatedData);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });

        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
            <h2 className="text-2xl font-heading mb-4">Article non trouvé</h2>
            <Link to="/blog" className="text-primary hover:underline font-bold">Retour au blog</Link>
        </div>
    );

    return (
        <main className="w-full bg-white min-h-screen text-gray-800 font-body">

            <div className="max-w-4xl mx-auto p-4 pt-32">
                {/* Title Section */}
                <div className="mb-10 text-center">
                    <Link to="/blog" className="inline-block mb-8 text-sm font-bold text-gray-500 hover:text-primary uppercase tracking-wider">
                        &larr; Retour aux articles
                    </Link>

                    <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-500 font-body mb-6 uppercase tracking-widest">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        <span>{post.author ? post.author.name : 'GRAPHE Togo'}</span>
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                        {post.title}
                    </h1>
                </div>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="mb-12 relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={post.mainImage}
                            alt={post.title}
                            className="w-full max-h-[500px] object-cover"
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none mb-16">
                    <PortableText
                        value={post.body}
                        components={portableTextComponents}
                    />
                </article>

                {/* Author Bio */}
                {post.author && (
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100">
                        {post.author.image?.asset?.url && (
                            <img
                                src={post.author.image.asset.url}
                                alt={post.author.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                        )}
                        <div className="text-center md:text-left">
                            <p className="font-heading text-sm text-primary font-bold mb-2 uppercase tracking-wide">L'auteur</p>
                            <p className="font-bold text-xl text-gray-900 mb-3">{post.author.name}</p>
                            {post.author.bio && (
                                <div className="text-sm text-gray-600 leading-relaxed max-w-lg">
                                    <PortableText
                                        value={post.author.bio}
                                        components={portableTextComponents}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="mt-24 pt-12 border-t border-gray-100">
                        <div className="text-center mb-12">
                            <span className="text-primary font-heading text-sm font-bold tracking-[2px] uppercase block mb-3">Découvrir plus</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Articles recommandés</h2>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    to={`/blog/${relatedPost.slug.current}`}
                                    key={relatedPost._id}
                                    className="group block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {relatedPost.mainImage && (
                                        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                            <img
                                                src={relatedPost.mainImage}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-body uppercase tracking-wider mb-3">
                                            <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                                        </div>

                                        <h3 className="text-lg font-heading font-bold mb-4 line-clamp-2 text-gray-900 group-hover:text-primary transition-colors leading-snug">
                                            {relatedPost.title}
                                        </h3>

                                        <span className="text-xs font-bold font-heading text-accent uppercase tracking-wider group-hover:text-primary transition-colors">
                                            Lire l'article
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
