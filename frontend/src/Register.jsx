import { useState } from "react";

export default function Register({ setView }) {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.text();
      if (res.ok) {
        setForm({ username: "", password: "", email: "" });
        setView("home");
      }
      else {
        setErrorMessage(data);
        setForm({ username: "", password: "", email: "" });
      }
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div style={styles.container}>
      {errorMessage}
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Submit</button>
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