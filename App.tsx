import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FreeAudit from './pages/FreeAudit';
import Button from './components/Button';
import { SERVICES } from './constants';

const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl font-bold text-contrast mb-4">404</h1>
    <p className="text-xl text-muted mb-8">Page not found</p>
    <Button to="/" variant="primary">Return Home</Button>
  </div>
);

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

          {/* 404 Route instead of Redirect for better dev experience */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;