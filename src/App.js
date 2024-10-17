import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import HabitManagement from './Components/HabitManagement';
import HabitTracking from './Components/HabitTracking';
import Profile from './Components/Profile';
import NotificationPanel from './Components/NotificationPanel';

function App() {
  const [habite, setHabite] = useState([]);
  const [notification, setNotification] = useState([]);
  const [user, setUser] = useState({ name: "John Doe", goal: "Be healthy" }); // User profile state

  const addHabit = (habit) => {
    setHabite([...habite, { ...habit, id: Date.now(), progress: 0, streak: 0 }]);
    setNotification([...notification, { message: `New habit added: ${habit.name}` }]);
  };

  const markComplete = (id) => {
    const habit = habite.find(val => val.id === id);
    if (habit) {
      setHabite(habite.map(val => val.id === id ? { ...val, progress: val.progress + 10, streak: val.streak + 1 } : val));
      alert(`You completed the ${habit.name} habit successfully!`);
      setNotification([...notification, { message: `${habit.name} habit marked as complete!` }]);
    }
  };

  const updateUser = (profile) => {
    setUser(profile); // Update the user profile
    console.log("Profile updated:", profile);
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home habite={habite} user={user} />} /> {/* Pass the user to Home */}
          <Route path="/manage" element={<HabitManagement addHabit={addHabit} />} />
          <Route path="/track" element={<HabitTracking habite={habite} markComplete={markComplete} />} />
          <Route path="/profile" element={<Profile updateUser={updateUser} user={user} />} /> {/* Pass user and updateUser */}
          <Route path="/notifications" element={<NotificationPanel notification={notification} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
