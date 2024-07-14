import React from 'react';
import Nav from './contents/Nav';
import HeroSection  from './contents/HeroSection';
import Products from './contents/Products';
import Review from './contents/Review';



function App() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  

  return (
    <>
      <Nav scrollToSection={scrollToSection}/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Products />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Review />
      </div>


     
    </>
  )
}

export default App
