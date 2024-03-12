import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const addItem = (itemName) => {
    setItems((prevItems) => {
      const newItems = [
        ...prevItems,
        { id: nanoid(), name: itemName, completed: false },
      ];

      localStorage.setItem("list", JSON.stringify(newItems));
      return newItems;
    });
  };
  const modifyStatus = (id) => {
    setItems(
      items.map((item) => {
        if (item.id == id) item.completed = !item.completed;
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setItems(
      items.filter((item) => {
        if (item.id == id) return false;
        return true;
      })
    );

    toast.success("Item deleted successfully");
  };

  return (
    <section className="section-center">
      <div className="Toastify"></div>

      <Form addItem={addItem} />
      <Items
        items={items}
        deleteItem={deleteItem}
        modifyStatus={modifyStatus}
      />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
