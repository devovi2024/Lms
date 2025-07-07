import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Ratting = ({ initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value); // Callback if passed
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoveredRating || rating);

        return (
          <span
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHoveredRating(starValue)}
            onMouseLeave={() => setHoveredRating(null)}
            className="cursor-pointer transition"
            title={`Rate ${starValue} star`}
          >
            <FaStar size={24} color={isFilled ? "#facc15" : "#e5e7eb"} />
          </span>
        );
      })}
    </div>
  );
};

export default Ratting;
