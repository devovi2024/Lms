import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Donald Jackman',
    position: 'SWE 1 @ Amazon',
    image: '/images/user1.jpg',
    text: 'I’ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
  },
  {
    id: 2,
    name: 'Richard Nelson',
    position: 'SWE 2 @ Samsung',
    image: '/images/user2.jpg',
    text: 'Imagify is a game changer! It simplified my workflow and gave me more time to focus on building better features at Samsung.',
  },
  {
    id: 3,
    name: 'James Washington',
    position: 'SWE 2 @ Google',
    image: '/images/user3.jpg',
    text: 'This tool has been an amazing asset. Imagify’s intuitive UI and quick results are perfect for anyone in tech or media.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">What Our Users Say</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Hear from developers and designers who’ve transformed their work using Imagify.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {testimonials.map(({ id, name, position, image, text }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-sm text-gray-500">{position}</p>
              </div>
            </div>

            <div className="flex gap-1 text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} />
              ))}
            </div>

            <p className="text-gray-600 flex-1 mb-4">
              “{text}”
            </p>

            <a
              href="#"
              className="text-sm text-blue-600 font-medium hover:underline transition-all"
            >
              Read full story →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
