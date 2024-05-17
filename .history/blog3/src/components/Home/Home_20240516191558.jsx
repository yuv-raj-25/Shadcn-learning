import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
        <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/your-image.jpg" alt="Home" className="rounded-lg shadow-lg mb-4 w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h2>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="/about" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</a>
        </div>
      </section>
      <section className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Service 1</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Service 2</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Service 3</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <section className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">Have questions? Contact us today!</p>
        <a href="/contact" className="text-blue-600 hover:underline mt-4 inline-block">Contact</a>
      </section>
    </div>
  );
};

export default Home;
