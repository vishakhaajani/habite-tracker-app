import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HabitManagement = ({ addHabit }) => {
  const [habit, setHabit] = useState({ name: '', goal: '', startDate: '', frequency: 'daily' });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit);
    alert(`${habit.name} habit added successfully!`)
    navigate('/')
    setHabit({ name: '', goal: '', startDate: '', frequency: 'daily' });
  };

  return (
    <div id="manage" className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Habit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Habit Name</label>
          <input
            type="text"
            value={habit.name}
            onChange={(e) => setHabit({ ...habit, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Goal</label>
          <input
            type="text"
            value={habit.goal}
            onChange={(e) => setHabit({ ...habit, goal: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            value={habit.startDate}
            onChange={(e) => setHabit({ ...habit, startDate: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Frequency</label>
          <select
            value={habit.frequency}
            onChange={(e) => setHabit({ ...habit, frequency: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default HabitManagement;
