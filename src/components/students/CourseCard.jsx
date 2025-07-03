import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const getOpacity = (index) => {
  const opacities = ['opacity-40', 'opacity-60', 'opacity-70', 'opacity-80', 'opacity-100'];
  return opacities[index] || 'opacity-40';
};

const CourseCard = ({ course }) => {
  const { currency = '$' } = useContext(AppContext);

  const {
    title,
    instructor,
    image,
    rating,
    reviews,
    price,
    discount = 0,
    course_id,
  } = course;

  const finalPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <Link
      to={`/course/${course_id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="block"
    >
      <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition duration-300 flex flex-col">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-xl"
        />

        <div className="p-4 flex flex-col items-start justify-between flex-1 text-left gap-1">
          <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-gray-500">{instructor}</p>

          <div className="flex items-center mt-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 text-yellow-400 ${
                    i < Math.round(rating) ? getOpacity(i) : 'opacity-20'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({reviews})</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm font-semibold text-gray-900">
              {currency}{finalPrice}
            </p>
            {discount > 0 && (
              <p className="text-sm text-gray-400 line-through">
                {currency}{price.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
