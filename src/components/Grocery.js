import React from 'react';

const Grocery = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        This is Our Grocery Store
      </h1>

      {/* Placeholder for child components or content */}
      <p className="text-gray-600 text-center">
        We offer a variety of products to meet your grocery needs. Explore our selection of fresh produce, dairy, and more!
      </p>
    </div>
  );
};

export default Grocery;