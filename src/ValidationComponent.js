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

// if (props.length <= 3) {
//   <div>
//     <p>Text too short</p>
//   </div
//   } else if (props.length >= 8) {
//   <div>
//     <p>Text too long</p>
//   </div
//   }

// if ({ props.length } <= 3) {
//   <p>Text too short</p>
// } else if ({ props.length } >= 8) {
//   <p>Text too long</p>
// }