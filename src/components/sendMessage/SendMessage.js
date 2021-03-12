import React, { Component } from 'react';
import { postMessage } from '../../services/apiServices';

class SendMessage extends Component {
  state = { input: '', author: 'm' };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input, author } = this.state;
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
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Type here"
          value={input}
          onChange={this.handleInputChange}
        ></input>
        <button>Send</button>
      </form>
    );
  }
}
export default SendMessage;
