import React from 'react';

const ValidationComponent = (props) => {
return (
  <div>
    <p> text length is {props.length} </p>
  </div>
);
}





export default ValidationComponent;

// if (props.length <= 3) {
//   <div>
//     <p>Text too short</p>
//   </div
//   } else if (props.length >= 8) {
//   <div>
//     <p>Text too long</p>
//   </div
//   }