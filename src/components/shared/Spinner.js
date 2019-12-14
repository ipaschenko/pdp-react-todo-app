import React from 'react';

function Spinner(props) {
  const styles = {
    position: 'fixed',
    top: '72px',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  };
   if (props.loading) {
     return (<div className="d-flex"
                  style={styles}>
       <div className="spinner-border text-info m-auto"></div>
     </div>);
   }

   return null;
}

export default Spinner;
