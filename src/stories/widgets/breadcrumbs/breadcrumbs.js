import React from 'react';
import './breadcrumbs.scss';

const Breadcrumb = () => {
  return(
    <div className="breadcrumbs">
      <ul id="breadcrumb">
        <li><a href="#"><span class="icon icon-home"> </span>Home</a></li>
        <li className="completed"><a href="#"><span class="icon icon-beaker"> </span> Projects</a></li>
        <li><a href="#"><span class="icon icon-double-angle-right"></span> Breadcrumb</a></li>
        <li><a href="#"><span class="icon icon-rocket"> </span> Getting started</a></li>
        <li><a href="#"><span class="icon icon-arrow-down"> </span> Download</a></li>
      </ul>
    </div>
  )
}

export default Breadcrumb