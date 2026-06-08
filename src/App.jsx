import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal animation trigger logic
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
