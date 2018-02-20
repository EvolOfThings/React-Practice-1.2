import React from 'react';

const ValidationComponent = (props) => {
return (
  <div>
    {
      (props.length < 5)
      ? <div> <p> Text is too short </p></div>
      : null 
    }
    { 
      (props.length > 10) 
      ? <div> <p> Text is too long </p></div>
      : null 
    }
  </div>
);
}





export default ValidationComponent;
