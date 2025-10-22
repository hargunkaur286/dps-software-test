import { useState } from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import ShoppingList from "./ShoppingList";

function App() {
  const [view, setView] = useState("home");
  const [userId, setUserId] = useState(null);

  return (
    <div>
      {view === "home" && <Home setView={setView} />}
      {view === "register" && <Register setView={setView} />}
      {view === "login" && <Login setView={setView} setUserId={setUserId} />}
      {view === "shopping" && <ShoppingList setView={setView} userId={userId} />}
    </div>
  );
}

export default App;