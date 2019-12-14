import * as React from 'react';
import PushMessage from './PushMessage';

class PushContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};

    this.deleteHandler = this.deleteHandler.bind(this);
  }

  styles = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: 2,
    width: '50%',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.key !== this.props.message.key) {
      this.setState({messages: [
          ...this.state.messages,
          {text: nextProps.message.message, type: nextProps.message.type, key: new Date().getTime()},
        ]});
    }
  }

  deleteHandler(key) {
    this.setState({messages: this.state.messages.filter((item) => item.key !== key )});
  };

  render () {
    console.log(this.state);
    const messages = this.state.messages
      .map((item) => {
        return (<PushMessage text={item.text}
                             type={item.type}
                             key={item.key}
                             keyId={item.key}
                             onClose={this.deleteHandler}/>);
      });

    return (<div style={this.styles}>
      {messages}
    </div>);
  }
}

export default PushContainer;
