import React from 'react';


const products = [
    {
        id: 1,
        name: "Piment en poudre",
        price: "1 500 FCFA",
        image: "/images/produits/produit-1.jpg",
        category: "Épices"
    },
    {
        id: 2,
        name: "Thé de Curcuma",
        price: "2 500 FCFA",
        image: "/images/produits/produit-2.jpg",
        category: "Bien-être"
    },
    {
        id: 3,
        name: "Thé de Gingembre",
        price: "2 550 FCFA",
        image: "/images/produits/produit-3.jpg",
        category: "Bien-être"
    },
    {
        id: 4,
        name: "Farine Enrichie",
        price: "1 650 FCFA",
        image: "/images/produits/produit-4.jpg",
        category: "Céréales"
    },
    {
        id: 5,
        name: "Miel Pur",
        price: "3 300 FCFA",
        image: "/images/produits/produit-5.png",
        category: "Naturel"
    },
    {
        id: 6,
        name: "Riz Local",
        price: "6 500 FCFA",
        image: "/images/produits/produit-6.jpg",
        category: "Céréales"
    }
];

const Shop = () => {
    return (
        <section id="shop" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-heading text-accent text-sm font-bold uppercase tracking-widest">
                        Boutique Solidaire
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mt-2">
                        Nos Produits
                    </h2>
                    <p className="font-body text-gray-500 mt-4 max-w-2xl mx-auto">
                        Soutenez les producteurs locaux en achetant nos produits naturels, transformés avec soin et respectueux de l'environnement.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            {/* Image */}
                            <div className="h-64 overflow-hidden relative bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-primary font-bold font-heading shadow-sm">
                                    {product.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                    {product.category}
                                </span>
                                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>

                                <a
                                    href={`https://wa.me/22890094383?text=Bonjour, je souhaite commander : ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 text-center bg-primary text-white font-heading font-bold uppercase text-sm tracking-wider rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Commander
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
