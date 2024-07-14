import React from 'react'
import { useState } from 'react';
import rev1 from '../assets/review1.jpg';
import rev2 from '../assets/review2.jpg';
import rev3 from '../assets/review3.jpg';

const reviews = [
    {
      image: rev1,
      name: 'John Doe',
      text: 'This cleanser is a game-changer! It removes all my makeup effortlessly without leaving my skin feeling dry. Plus, it has a lovely, soothing scent. My face feels clean and refreshed every time I use it.',
    },
    {
      image: rev2,
      name: 'rosy',
      text: 'This cleanser is a game-changer! It removes all my makeup effortlessly without leaving my skin feeling dry. Plus, it has a lovely, soothing scent. My face feels clean and refreshed every time I use it.',
    },
    {
      image: rev3,
      name: 'stacy',
      text: 'This cleanser is a game-changer! It removes all my makeup effortlessly without leaving my skin feeling dry. Plus, it has a lovely, soothing scent. My face feels clean and refreshed every time I use it.',
    },
  ];
  

export const Review = () => {
    
  return (

    <div className="container" id="review">
      <div className=" relative mt-20  border-b border-neutral-800 flex flex-col justify-between lg:mt-30">
        <div className="text-lg text-center lg:text-xl bg-neutral-900 text-pink-500 rounded-full h-7  px-2 py-1 uppercase mt-5">
            <span className="text-primary">Hear From Our Trusty customers</span>
        </div>
     </div>
    
    <div className="container flex flex-wrap justify-center py-7">
    {reviews.map((review, index) => (
      <div key={index} className="review-ticket-container xl:w-1/3 h-1/2 md:w-1/2 sm:w-1/2 p-4 ">
        <div className="review-ticket bg-neutral-700 rounded-md shadow-lg shadow-neutral-400">
        
          <img
            src={review.image}
            alt="Customer profile pic"
            className="profile-pic h-12 w-12 rounded-full mr-4"
          />
          <span className ="mt-5 p-2">{review.name}</span>
         
          
          <p className="p-2 mt-10">{review.text}</p>
        </div>
      </div>
    ))}
   </div>
  </ div>
  )
}
export default Review;

