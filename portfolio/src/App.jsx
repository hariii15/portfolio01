import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome';
import Hero from './components/hero';
import Layout from './components/Layout';
import About from './components/about'; // We'll keep the import name but understand it's now for Skills
import Projects from './components/projects';
import Contact from './components/contact';
import Certificates from './components/certificates'; // Import the new component
import Particles from './components/Particles';

const AppRouter = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Particles */}


      {/* Application content with adjusted z-index */}
      <div className="relative z-20 min-h-screen">
        <Router>
          <Routes>
            {/* Welcome page rendered directly without Layout */}
            <Route path="/" element={<Welcome />} />

            {/* All other routes use Layout */}
            <Route element={<Layout />}>
              <Route path="/hero" element={<Hero />} />
              <Route path="/about" element={<About />} /> {/* Keep the route, just understand it's for Skills */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} /> {/* Add new route */}
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default AppRouter;
