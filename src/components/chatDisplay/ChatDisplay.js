import React, { Component } from 'react';

import { AUTHOR_NAME } from '../../constants/constants';

import { getMessages } from '../../services/apiServices';
import SendMessage from '../sendMessage/SendMessage';
import MessageList from './MessageList';

class ChatDisplay extends Component {
  state = { receivedMessages: [], author: AUTHOR_NAME };

  componentDidMount() {
    this.getAllMessages();
  }

  getAllMessages = () => {
    getMessages().then((receivedMessages) =>
      this.setState({ receivedMessages })
    );
  };

  reloadChat = () => {
    this.getAllMessages();
  };

  render() {
    const { receivedMessages, author } = this.state;

    return (
      <div className="chat_display">
        <MessageList receivedMessages={receivedMessages} author={author} />
        <SendMessage reloadChat={this.reloadChat} author={author} />
      </div>
    );
  }
}

export default ChatDisplay;
