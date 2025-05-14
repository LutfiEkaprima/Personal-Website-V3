import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CareerSection from './components/sections/CareerSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;