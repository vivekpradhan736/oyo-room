import React from 'react';
// import './tailwind.output.css';

const Footer = () => {
 return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to OYO App</h1>
      <div className="flex justify-center items-center mb-4">
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Download on App Store
        </a>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get it on Google Play
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700">Discover our story, values, and mission.</p>
        </div>
        
        <div className="bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-2">Support</h2>
          <p className="text-gray-700">Find help with our support center and resources.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;