import { useEffect, useState } from "react";

export default function ShoppingList({ setView, userId }) {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState({ item: "", quantity: "" });

  useEffect(() => {
    if (userId) fetchList();
  }, [userId]);

  const fetchList = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/shoppinglist/${userId}`);
      const data = await res.json();
      setShoppingList(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.item || !newItem.quantity) return;
    try {
      await fetch(`http://127.0.0.1:3000/shoppinglist/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      setNewItem({ item: "", quantity: "" });
      fetchList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Shopping List</h2>
      <ul style={styles.list}>
        {shoppingList.map((entry, idx) => (
          <li key={idx}>
            <input type="checkbox" checked={entry.bought} readOnly />
            {entry.item} — {entry.quantity}
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddItem} style={styles.form}>
        <input
          placeholder="Item"
          value={newItem.item}
          onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
        />
        <input
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: e.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>

      <button onClick={() => setView("home")}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    gap: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "200px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};
