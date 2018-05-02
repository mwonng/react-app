import React from 'react';
import './breadcrumbs.scss';

const Breadcrumb = () => {
  return(
    <div className="breadcrumbs">
      <ul id="breadcrumb">
        <li className="completed"><a href="#"><span class="icon icon-beaker"> </span>Payment</a></li>
        <li><a href="#"><span class="icon icon-double-angle-right"></span>Addons</a></li>
        <li><a href="#"><span class="icon icon-rocket"> </span>Review</a></li>
        <li className="current"><a href="#"><span class="icon icon-arrow-down"> </span>Apply</a></li>
      </ul>
    </div>
  )
}

export default Breadcrumb