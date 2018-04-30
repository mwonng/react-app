import React from 'react';
import './ribbon.css';

const Ribbon = (props) => {
  return(
    <h1 class="ribbon">
      <strong class="ribbon-content">{props.children}</strong>
    </h1>
  )
}

export default Ribbon