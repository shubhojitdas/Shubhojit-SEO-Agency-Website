import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FreeAudit from './pages/FreeAudit';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          
          {/* Dynamic Service Routes */}
          {SERVICES.map((service) => (
            <Route 
              key={service.id}
              path={service.slug}
              element={<ServiceDetail data={service} />}
            />
          ))}

          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;