import React from "react";

function SingleItem({ item, deleteItem, modifyStatus }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => {
          modifyStatus(item.id);
        }}
      />
      <p
        style={
          item.completed
            ? { textTransform: "capitalize", textDecoration: "line-through" }
            : { textTransform: "capitalize" }
        }
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          deleteItem(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
