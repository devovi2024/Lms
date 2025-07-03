import React from 'react';
import '../../styles/global.css'
const companyLogos = [
  {
    name: 'Google',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Amazon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Netflix',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'IBM',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  },
];

const Companies = () => {
  return (
    <div className="py-16 bg-gray-50 text-center overflow-hidden">
      <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-10">
        Trusted by learners from
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {companyLogos.map((company, idx) => (
          <img
            key={idx}
            src={company.url}
            alt={company.name}
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition duration-300 ease-in-out animate-loop-slide"
            title={company.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
