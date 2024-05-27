import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Al-Ehed</p> {/* Use the current year */}
      </div>
    </footer>
  );
}
