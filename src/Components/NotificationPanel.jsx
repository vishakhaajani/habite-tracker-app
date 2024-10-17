import React from 'react';

const NotificationPanel = ({ notification }) => {
  return (
    <div id="notifications" className="container mx-auto py-4 mt-5">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notification.map((notif, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
          >
            <span className="text-gray-800">{notif.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
