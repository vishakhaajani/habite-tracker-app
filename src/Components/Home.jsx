import React from 'react';

const Home = ({ habite, user }) => {
  return (
    <div className="container py-4 mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4" style={{textTransform: "capitalize"}}>Welcome, {user.name}</h1> {/* Display user name */}
      <p className="mb-4">Your goal: {user.goal}</p> {/* Display user goal */}
      <h2 className="text-2xl font-bold mb-4 mt-10">Daily Habits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          habite.map((val) => (
            <div key={val.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold"style={{textTransform: "capitalize"}}>{val.name}</h3>
              <p>Goal: {val.goal}</p>
              <p>Streak: {val.streak} days</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">Progress</span>
                  <span className="text-xs font-semibold inline-block text-indigo-600">{val.progress}%</span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: `${val.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">"{val.motivation}"</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
