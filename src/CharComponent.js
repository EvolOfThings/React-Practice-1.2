import React from 'react';

const CharComponent = (props) => {
  const listStyle = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'
  };


  return (
    <div style={listStyle} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default CharComponent;