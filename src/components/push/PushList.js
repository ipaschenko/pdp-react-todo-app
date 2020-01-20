import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PushMessage from './PushMessage';

export function PushList(props) {
  const styles = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: 2,
    width: '50%',
  };


  const list = props.messages.map((item) => {
      return (<PushMessage text={item.text}
                           type={item.type}
                           key={item.key}
                           keyId={item.key}
                           onClose={deleteHandler}/>);
    });

  return (<div style={styles}>{list}</div>);



};
