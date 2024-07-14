import React from 'react'
import vid1 from '../assets/videos/video1.mp4'
import vid2 from '../assets/videos/video2.mp4'


export const HeroSection = () => {
  return (
    <>
      <div className = "flex flex-col items-center mt-6 lg:mt-20" id="hero-section">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Get Your Personalized<br></br>
            
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Skincare</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-700 max-w-4xl">
        Embrace the beauty of nature with our expertly crafted skincare line.
         Our products are designed to rejuvenate and revitalize, giving you the radiant, 
         glowing skin you deserve.<br></br>
         Book your free consultancy now !!
        </p>
      
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-violet-800 to-pink-700 py-3 px-4 mx-3 rounded-md hover:scale-105 transition duration-300 ease-in-out">
             Book Now
          </a>
          
        </div>
        <div className="flex mt-10 justify-center">
          <video autoPlay loop muted className="rounded-lg w-1/2   shadow-lg shadow-neutral-700 mx-2 my-4 h-1/2">
             <source src={vid1} type="video/mp4" />
             your browser does not support video.
          </video>
          <video autoPlay loop muted className="rounded-lg w-1/2  shadow-lg shadow-neutral-700 mx-2 my-4  h-1/2">
             <source src={vid2} type="video/mp4" />
             your browser does not support video.
          </video>
        </div>
      </div>
    </>
  )
}
export default HeroSection;