import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data = '' }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data);

  const onSearchHandler = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      navigate('/course-list/' + encodeURIComponent(trimmedInput));
    } else {
      navigate('/course-list');
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="mt-8 max-w-xl mx-auto flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md"
    >
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
