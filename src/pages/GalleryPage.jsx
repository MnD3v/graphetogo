import React, { useEffect } from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <AppBar />
            <main className="flex-grow pt-20">
                {/* Reusing the Gallery component without a limit to show all images */}
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default GalleryPage;
