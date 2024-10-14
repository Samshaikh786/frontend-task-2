import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MessageList from '../Message/MessageList';
import Chat from '../Chat/Chat';

const Messages = () => {
  return (
    <div className="flex h-full">
      <MessageList />
      <Routes>
        <Route path="/" element={<div className="w-3/5 bg-gray-100 p-4">Select a message to start chatting</div>} />
        <Route path=":messageId" element={<Chat/>} />
      </Routes>
    </div>
  );
};

export default Messages;
