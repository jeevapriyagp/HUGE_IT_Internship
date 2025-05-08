import { useState } from "react";
import ShoppingItem from "./ShoppingItem";

// component that show the shopping items as a shopping list
function ShoppingList() 
{
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Your Shopping List</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} onRemove={() => handleRemoveItem(index)} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

