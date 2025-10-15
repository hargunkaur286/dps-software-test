import { useState } from "react";

export default function Login({ setView, setUserId }) {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/users/username/${username}`
      );
      const user = await res.json();
      if (user && user._id) {
        setUserId(user._id);
        setView("shopping");
      } else {
        alert("User not found");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="Password (ignored)" />
        <button type="submit">Login</button>
        <button type="button" onClick={() => setView("home")}>
          Back
        </button>
      </form>
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
};
