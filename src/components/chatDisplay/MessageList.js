import React, { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ receivedMessages, author }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [receivedMessages]);

  return (
    <div>
      <ul>
        {receivedMessages &&
          receivedMessages.map((receivedMessageItem) => (
            <MessageItem
              key={receivedMessageItem._id}
              receivedMessageItem={receivedMessageItem}
              author={author}
            />
          ))}
        <div ref={messagesEndRef} />
      </ul>
    </div>
  );
};
export default MessageList;
