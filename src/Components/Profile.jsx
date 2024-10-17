import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ updateUser, user }) => {
  const [profile, setProfile] = useState(user);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(profile);
    alert("Profile update successfully!");
    navigate('/');
  };

  return (
    <div id="profile" className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Goal</label>
          <input
            type="text"
            value={profile.goal}
            onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
