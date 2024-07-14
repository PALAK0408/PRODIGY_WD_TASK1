import React from 'react'
import prod1 from '../assets/Product1.jpg';
import prod2 from '../assets/Product2.jpg';
import prod3 from '../assets/Product3.jpg';

export const Products = () => {
  return (
    <>
      <div className=" relative mt-20  border-b border-neutral-800 flex flex-col justify-between lg:mt-30" id="products">
        <div className="text-lg text-center lg:text-xl text-neutral-600">
            <span className="text-primary">Unlock the power of nature with our premium skincare essentials.
                 Each product is carefully formulated to 
                nourish, protect, and enhance your skin, revealing your natural beauty</span>
        </div>
        <span className="bg-neutral-900 text-pink-500 rounded-full h-7 text-sm font-medium px-2 py-1 uppercase text-center mt-5">
          Shop Now
        </span>
        <div className="flex flex-wrap mt-10 lg:mt-20">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-white rounded-md shadow-md p-4">
              <img src={prod1} alt="Product 1" className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h5 className="text-lg font-bold">Product 1</h5>
                <p className="text-sm text-gray-600">Say goodbye to impurities with the PurityFoam Cleanser. Our gentle yet effective formula removes dirt, oil, and makeup without stripping your skin of its natural moisture. Infused with soothing botanical extracts, it leaves your skin feeling fresh, clean, and balanced.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-500">4.5/5</span>
                  <span className="text-sm text-gray-600">$29.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 hover:scale-105 transition duration-300 ease-in-out ">
            <div className="bg-white rounded shadow-md p-4">
              <img src={prod2} alt="Product 2" className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h5 className="text-lg font-bold">Product 2</h5>
                <p className="text-sm text-gray-600">Achieve a luminous glow with the RadianceBoost Moisturizer. Rich in peptides and natural oils, this luxurious cream hydrates and rejuvenates, improving skin texture and tone. Perfect for day and night use, it’s your key to a radiant complexion.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-500">4.2/5</span>
                  <span className="text-sm text-gray-600">$39.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-white rounded shadow-md p-4">
              <img src={prod3} alt="Product 2" className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h5 className="text-lg font-bold">Product 2</h5>
                <p className="text-sm text-gray-600">Unleash the power of nature and science with our Revitalizing Serum Elixir. This potent blend of antioxidants, vitamins, and hyaluronic acid deeply hydrates and nourishes your skin, reducing fine lines and wrinkles for a smoother, more youthful appearance.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-500">4.2/5</span>
                  <span className="text-sm text-gray-600">$39.99</span>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </>
  )
}
export default Products