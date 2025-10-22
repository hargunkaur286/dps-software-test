export default function Home({ setView }) {
  return (
    <div style={styles.container}>
      <h1>Welcome</h1>
      <button onClick={() => setView("register")} style={styles.button}>
        Register
      </button>
      <button onClick={() => setView("login")} style={styles.button}>
        Login
      </button>
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
  button: {
    margin: "0.5rem",
  },
};
