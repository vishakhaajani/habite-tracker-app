import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-indigo-300">Home</Link>
            </li>
            <li>
              <Link to="/manage" className="hover:text-indigo-300">Manage Habits</Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-indigo-300">Track Habits</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-indigo-300">Profile</Link>
            </li>
            <li>
              <Link to="/notifications" className="hover:text-indigo-300">Notifications</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
