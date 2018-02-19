import React, { Component } from 'react';

const ValidationComponent = (props) => {
  if (props.length <= 3) {
    <div>
      <p>Text too short</p>
    </div
  } else if (props.length >= 8) {
    <div>
      <p>Text too long</p>
    </div
  }
}





export default ValidationComponent;