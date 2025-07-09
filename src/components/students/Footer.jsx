import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "Arfan Ovi",
    role: "Front-End Developer",
    quote: "Edemy transformed how I learn — from basics to real-world job skills.",
  },
  {
    id: 2,
    name: "Dr. Mohammad Deif",
    role: "Product Manager",
    quote: "Clear, structured, and impactful. I recommend Edemy to all my juniors.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">WebDemy</h2>
          <p className="text-sm text-gray-400 mt-4">
            A platform for learners, dreamers, and doers. Start building your future today.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Explore by Goal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore by Goal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/goal/get-a-job">Get a Job</Link></li>
            <li><Link to="/goal/launch-startup">Launch a Startup</Link></li>
            <li><Link to="/goal/freelance">Become a Freelancer</Link></li>
            <li><Link to="/goal/learn-new-skill">Learn a New Skill</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/help">Help Center</Link></li>
          </ul>
        </div>

        {/* Mini Testimonials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What Learners Say</h3>
          <div className="space-y-6">
            {testimonials.map((item) => (
              <div key={item.id} className="text-sm border-l-4 border-indigo-500 pl-4">
                <p className="text-gray-300 italic mb-2">“{item.quote}”</p>
                <p className="text-gray-400 font-medium">
                  — {item.name}, <span className="text-gray-500">{item.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} WebDemy. All rights reserved. | <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
