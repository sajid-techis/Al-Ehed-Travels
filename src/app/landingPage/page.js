'use client'
import Head from 'next/head';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Al Ahed</title>
        <meta name="description" content="Explore the world with us!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-darkGreen text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">AL-EHED</div>
          {/* Hamburger menu icon for mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 3h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 8h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 8h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Regular navigation links for larger screens */}
          <ul className="hidden lg:flex space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-darkGreen">
            <ul className="py-4">
              <li><a href="/" className="block py-2 px-4 text-white hover:bg-gray-800">Home</a></li>
              <li><a href="/destinations" className="block py-2 px-4 text-white hover:bg-gray-800">Destinations</a></li>
              <li><a href="/about" className="block py-2 px-4 text-white hover:bg-gray-800">About</a></li>
              <li><a href="/contact" className="block py-2 px-4 text-white hover:bg-gray-800">Contact</a></li>
            </ul>
          </div>
        )}
      </header>
      <main
        className="flex-grow bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/img/Hero3.jpg")' }}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6 mt-4">Welcome To AL-EHED Tour And Travels</h1>
          <p className="text-xl mb-6">Your Journey Begins Here.</p>
          <button className="bg-gold text-white py-2 px-4 rounded hover:bg-blue-700">
            Explore Now
          </button>
        </div>
      </main>
    </div>
  );
}
