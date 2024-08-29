import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';

function Navbarfading() {

  const [showNavbar, setShowNavbar] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.headerArea').offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerHeight) {
        setShowNavbar(true);
        setFadeClass('fade-down'); // Apply fade down animation
      } else {
        setFadeClass('fade-up'); // Apply fade up animation
        setTimeout(() => setShowNavbar(false), 300); // Delay hiding to allow fade up animation to complete
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>
      {/* Conditional rendering of Navbar */}
      {showNavbar && (
        <div className={`fixed-top ${fadeClass}`}>
          <Navbar />
        </div>
      )}

    </>
  )
}
export default Navbarfading;