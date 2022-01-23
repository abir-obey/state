import React from "react";

const ListItems = ({ items, handeleDelete }) => {
  return (
    <div>
      <h2>List Items</h2>
      {items.map((el, i) => (
        <ul>
          <li>{el}</li>
          <button onClick={() => handeleDelete(i)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default ListItems;
