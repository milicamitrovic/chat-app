import React, { Component } from 'react';
import { postMessage } from '../../services/apiServices';

class SendMessage extends Component {
  state = { input: '' };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input } = this.state;
    const { author } = this.props;
    const content = { message: input, author: author };
    this.submitMessage(content);
    this.setState({ input: '' });
  };

  submitMessage = (content) => {
    postMessage(content, () => this.props.reloadChat());
  };

  render() {
    const { input } = this.state;
    return (
      <form className="send_message" onSubmit={this.handleSubmit}>
        <input
          placeholder="Message"
          value={input}
          onChange={this.handleInputChange}
        ></input>
        <button>Send</button>
      </form>
    );
  }
}
export default SendMessage;
