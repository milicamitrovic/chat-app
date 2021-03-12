import React from 'react';
import moment from 'moment';

const MessageItem = ({ receivedMessageItem, author }) => {
  const timestampToDate = moment(receivedMessageItem.timestamp).format(
    'D MMM YYYY H:mm'
  );
  const isSent = author === receivedMessageItem.author ? 'sent' : 'received';
  return (
    <div className={`${isSent} message_item`}>
      <li className={isSent}>
        <p className={isSent}>{receivedMessageItem.author}</p>
        <p className="message_item--content">{receivedMessageItem.message}</p>
        <p className={isSent}>{timestampToDate}</p>
      </li>
    </div>
  );
};
export default MessageItem;
