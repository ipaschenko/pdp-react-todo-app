import React, { useEffect, useState } from 'react';
import PushMessage from './PushMessage';

function PushContainer(props) {
  const styles = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: 2,
    width: '50%',
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    const lastMessage = messages && messages.slice(-1).pop();
    if (props.message && (!lastMessage || lastMessage.key !== props.message.key)) {
      setMessages([...messages, props.message]);
    }
  }, [props.message]);

  const deleteHandler = (key) => {
    setMessages([...messages.filter((item) => item.key !== key )]);
  };

  const createListItem = (item) => {
    return (<PushMessage text={item.text}
                         type={item.type}
                         key={item.key}
                         keyId={item.key}
                         onClose={deleteHandler}/>);
  };

  return (<div style={styles}>{messages.map((item) => createListItem(item))}</div>);
}

export default PushContainer;
