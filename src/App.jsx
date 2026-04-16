import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import GalleryPage from './pages/GalleryPage';
import GalleryDetail from './pages/GalleryDetail';

import AppBar from './components/AppBar';
import ScrollToHash from './components/ScrollToHash';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for better user experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (

    <Router>
      <ScrollToHash />
      <AppBar />
      {/* 
        Note: You can add a Layout component here if you want a persistent Navbar/Footer.
        For now, Home includes its own structure, and Blog pages work independently or could be wrapped.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/galerie/:slug" element={<GalleryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
