import React, { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [inputFormValue, setInputFormValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    const data = new FormData(e.target);

    if (!data.get("itemInput")) {
      toast.error("Please provide value");
      return;
    }
    addItem(data.get("itemInput"));
    setInputFormValue("");

    toast.success("Item added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          name="itemInput"
          value={inputFormValue}
          onChange={(e) => {
            e.preventDefault();
            setInputFormValue(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
