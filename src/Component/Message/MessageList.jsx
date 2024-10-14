import React from 'react';
import { Link } from 'react-router-dom';

const messages = [
  { id: 1, name: 'Zoho Company', message: 'Would like to ask your view on my Profile...' },
  { id: 2, name: 'Aramco', message: 'Can we schedule a call?' },
  { id: 3, name: 'SR Agency', message: 'What\'s the Date of Interview?' },
];

const MessageList = () => {
  return (
    <div className="w-2/5 bg-white p-4 border-r overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4">
        <button className="bg-gray-300 p-2 rounded-full">All</button>
        {messages.map(msg => (
          <button key={msg.id} className="bg-gray-200 p-2 rounded-full">{msg.name}</button>
        ))}
      </div>
      {messages.map(msg => (
        <Link to={`/messages/${msg.id}`} key={msg.id}>
          <div className="p-3 border-b cursor-pointer">
            <div className="flex items-center space-x-4">
              <img src="profile-placeholder.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-bold">{msg.name}</p>
                <p>{msg.message}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MessageList;
