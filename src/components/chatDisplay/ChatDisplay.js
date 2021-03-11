import React from 'react';
import SendMessage from '../sendMessage/SendMessage';
import MessageList from './MessageList';

const ChatDisplay = () => {
  return (
    <div>
      <div>
        <MessageList />
        <SendMessage />
      </div>
    </div>
  );
};
export default ChatDisplay;
