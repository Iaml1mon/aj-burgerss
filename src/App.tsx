import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Announcement from './components/home/Announcement';
import Menu from './components/home/Menu';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Social from './components/home/Social';
import Testimonial from './components/home/Testimonial';
import Images from './components/home/Images';
import SpecialOffers from './components/home/SpecialOffers';
import Careers from './pages/Careers'; // Import Careers page
import FindTrucks from './pages/FindTrucks'; // Import FindTrucks page

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Announcement />
                <SpecialOffers />
                <Menu />
                <About />
                <Social />
                <Images />
                <Testimonial />
                <Contact />
              </main>
            } />
            <Route path="/careers" element={<Careers />} /> {/* Add Careers route */}
            <Route path="/find-trucks" element={<FindTrucks />} /> {/* Add FindTrucks route */}
            {/* Removed Franchise route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

