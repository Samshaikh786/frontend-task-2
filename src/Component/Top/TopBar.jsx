import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search...."
          className="w-96 py-2 px-4 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 rounded-full bg-gray-200"></button>
        <button className="w-8 h-8 rounded-full bg-gray-200"></button>
        <button className="w-8 h-8 rounded-full bg-gray-200"></button>
      </div>
    </div>
  );
};

export default Topbar;
