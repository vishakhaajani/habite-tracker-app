import React from 'react';

const HabitTracking = ({ habite, markComplete }) => {
  return (
    <div id="track" className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Your Habits</h1>
      <div className="grid grid-cols-1 gap-6">
        {habite.map((val) => (
          <div 
            key={val.id} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{val.name}</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Progress: {val.progress}%</span>
              <button
                onClick={() => markComplete(val.id)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracking;
