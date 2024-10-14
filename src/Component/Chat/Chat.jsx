import React from 'react';
import { useParams } from 'react-router-dom';

const messages = {
  1: { name: 'Zoho Company', conversation: ['Whats the Date of Interview?', '30 Aug 2024, 9 to 6 PM @ Mumbai'] },
  2: { name: 'Aramco', conversation: ['Can we schedule a call?', 'How about tomorrow at 2 PM?'] },
  3: { name: 'SR Agency', conversation: ['What\'s your view on my Profile?', 'Looking good, but needs updates.'] },
};

const Chat = () => {
  const { messageId } = useParams();
  const selectedMessage = messages[messageId];

  if (!selectedMessage) {
    return <div className="w-3/5 bg-gray-50 p-4">Select a message to view the chat.</div>;
  }

  return (
    <div className="w-3/5 bg-white p-4 flex flex-col">
      <div className="flex items-center space-x-4">
        <img src="profile-placeholder.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="font-bold">{selectedMessage.name}</h2>
          <p>Industry Name | Location</p>
        </div>
      </div>
      <div className="mt-4 flex-1 overflow-y-auto">
        {selectedMessage.conversation.map((msg, index) => (
          <p key={index} className={`mb-4 p-3 rounded ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`}>
            {msg}
          </p>
        ))}
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Answer Query" className="w-full p-2 border rounded" />
      </div>
    </div>
  );
};

export default Chat;
