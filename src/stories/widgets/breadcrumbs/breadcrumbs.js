import React from 'react';
import './breadcrumbs.scss';
import './table_breadcrumbs.scss';
const Breadcrumb = () => {
  return(
    <div className="breadcrumbs">
      <ul id="breadcrumb">
        <li className="completed">
          <a href="#">
            Choose Contract
          </a>
        </li>
        <li>
          <a href="#">
            Addons select
          </a>
        </li>
        <li>
          <a href="#">
            Review payment
          </a>
        </li>
        <li className="current">
          <a href="#">
            Apply online
          </a>
        </li>
      </ul>
    </div>
    )
}

const TableBreadcrumb = () => {
  return(
    <table id="table-breadcrumb">
      <tr>
        <td className="completed">
          <span><a href="#">Change role</a></span>
        </td>
        <td className="selected">
          <span>Switch Banner</span>
        </td>
        <td>
          <span>Dig hole</span>
        </td>
        <td>
          <span>Whispering story</span>
        </td>
      </tr>
    </table>
  )
}

export default TableBreadcrumb