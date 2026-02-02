import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Shop from '../components/Shop';
import About from '../components/About';
import LatestArticles from '../components/LatestArticles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Gallery limit={6} />
            <Shop />
            <LatestArticles />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
