import React from 'react';
import moment from 'moment';

const MessageItem = ({ receivedMessageItem, author }) => {
  const timestampToDate = moment(receivedMessageItem.timestamp).format(
    'D MMM YYYY H:mm'
  );

  return (
    <div>
      <li>
        <p>{receivedMessageItem.author}</p>
        <p>{receivedMessageItem.message}</p>
        <p>{timestampToDate}</p>
      </li>
    </div>
  );
};
export default MessageItem;
