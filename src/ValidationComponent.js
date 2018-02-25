import React from 'react';

const ValidationComponent = (props) => {

  const style = {
    color: 'red'
  };

  let validationMessage = '';
   
   if (props.length > 10) {
     validationMessage = <p> Text too long</p>;
   } else if 
      ((props.length < 5) && (props.length != 0)) {
      validationMessage = <p> Text too short</p>;
   }
return (
  <div style={style}>
    {validationMessage}
  </div>
);
}





export default ValidationComponent;
// {
//   (props.length < 5)
//     ? <div> <p> Text is too short </p></div>
//     : null
// }
// {
//   (props.length > 10)
//     ? <div> <p> Text is too long </p></div>
//     : null
// }