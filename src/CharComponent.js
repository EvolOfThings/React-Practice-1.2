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
    <div>
      <ul style={listStyle}>
       {props.arry}
      </ul>
    </div>
  );
}

export default CharComponent;