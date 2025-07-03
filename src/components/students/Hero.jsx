import React from 'react';
import SearchBar from './SearchBar'; 
export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        Empower your future with the <br />
        courses designed to{' '}
        <span className="relative inline-block text-blue-600">
          <span className="relative z-10">fit your choice</span>
          <span
            className="absolute -bottom-1 left-0 w-full h-2 bg-blue-300 z-0 rounded-full animate-pulse"
            style={{ transform: 'skewX(-12deg)' }}
          ></span>
        </span>
        .
      </h1>

      <p className="mt-8 text-gray-600 max-w-xl mx-auto">
        We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>

      <SearchBar />
    </div>
  );
}
