import React from 'react';

const MessageList = ({ receivedMessages }) => {
  return (
    <div>
      <ul>
        {receivedMessages.receivedMessages.map((receivedMessageItem) => (
          <li>
            <div>{receivedMessageItem.author}</div>
            <div>{receivedMessageItem.message}</div>
            <div>{receivedMessageItem.timestamp}</div>
            <div>{receivedMessageItem.token}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MessageList;
