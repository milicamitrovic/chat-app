import React, { Component } from 'react';
import { getMessages } from '../../services/apiServices';
import SendMessage from '../sendMessage/SendMessage';
import MessageList from './MessageList';

class ChatDisplay extends Component {
  state = { receivedMessages: [] };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    getMessages().then((receivedMessages) =>
      this.setState({ receivedMessages })
    );
  };

  render() {
    const receivedMessages = this.state;

    return (
      <div>
        <MessageList receivedMessages={receivedMessages} />
        <SendMessage />
      </div>
    );
  }
}

export default ChatDisplay;
