import React from "react";
import SingleItem from "./SingleItem";

function Items({ items, deleteItem, modifyStatus }) {
  return (
    <div className="items">
      {items.map((ele) => {
        return (
          <SingleItem
            item={ele}
            key={ele.id}
            deleteItem={deleteItem}
            modifyStatus={modifyStatus}
          />
        );
      })}
    </div>
  );
}

export default Items;

