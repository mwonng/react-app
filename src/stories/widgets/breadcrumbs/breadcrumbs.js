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

const TableBreadcrumb = (props) => {
  let preItems = [{
      text: "Choose plan",
      className: "completed",
      url: "#1"
    },
    {
      text: "Choose addons",
      className: "selected",
      url: "#2"
    },
    {
      text: "Config payment",
      className: "",
      url: "#3"
    },
    {
      text: "Apply online",
      className: "",
      url: "#4"
    }
  ]
  const items = props.items || preItems.map((i,index) =>
    <td className={i.className} key={index} >
      <span>{i.text}</span>
      {i.url? <a href={i.url}></a> : ""}
    </td>
  )
  return(
    <table id="table-breadcrumb">
      <tbody>
        <tr>
          {items}
        </tr>
      </tbody>
    </table>
  )
}

export default TableBreadcrumb