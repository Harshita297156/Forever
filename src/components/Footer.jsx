import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div >
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* Logo & Brand Info */}
        <div>
          <img src={assets.logo} alt="Brand Logo" className="w-32 mb-4" />
          <p className="w-full md:w-2/3 text-gray-600">
          At Forever, we believe fashion is more than just clothing—it's a statement, a reflection of confidence and individuality. Our designs blend timeless elegance with modern trends, ensuring you stay effortlessly stylish for every occasion. With a commitment to quality, sustainability, and innovation, we craft pieces that empower you to express yourself boldly. Step into the world of Forever, where fashion meets passion.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-gray-800">Home</li>
            <li className="cursor-pointer hover:text-gray-800">About Us</li>
            <li className="cursor-pointer hover:text-gray-800">Delivery</li>
            <li className="cursor-pointer hover:text-gray-800">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className='cursor-pointer hover:text-gray-800'>+1-212-456-7890</li>
            <li className='cursor-pointer hover:text-gray-800'>sharma636@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'> Copyright Elevate your style with us. © 2025 FOREVER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
