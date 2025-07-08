import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-600 text-sm py-4 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} WebDemy Educator Panel. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/support" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
