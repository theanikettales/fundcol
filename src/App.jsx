import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProgressBar from './components/ProgressBar';
import DonationSection from './components/DonationSection';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container main-content">
        <HeroSection />
        <ProgressBar />
        <DonationSection />
        <Instructions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
