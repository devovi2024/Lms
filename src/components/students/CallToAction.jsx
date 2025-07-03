import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-24 px-4">
      <div className="max-w-5xl mx-auto text-center bg-white border border-gray-200 rounded-3xl shadow-xl px-8 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          Ready to <span className="text-indigo-600">Create Impact?</span>
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Transform your ideas into reality with our all-in-one platform. Start building powerful solutions with just a few clicks.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary Button */}
          <Link
            to="/get-started"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full text-base shadow-md transition duration-300"
          >
            Get Started Now
          </Link>

          {/* Secondary Button */}
          <Link
            to="/learn-more"
            className="border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-medium px-8 py-3 rounded-full text-base transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
