// "use client";

// import { useState } from "react";
import styles from "./LoginForm.module.css";
import { login } from "@/app/action";

function Login() {
  // const [username, setUsername] = useState("atuny0");
  // const [password, setPassword] = useState("9uQFF1Lh");

  return (
    <div className={styles.container}>
      <form action={login} className={styles.form}>
        <h1>Log in</h1>
        <input
          type="text"
          placeholder="User name"
          name="username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.loginBtn}
          type="submit"
          // onClick={() => login(username, password)}
        >
          Log in
        </button>
        <p>username: atuny0</p>
        <p>pass: 9uQFF1Lh</p>
      </form>
    </div>
  );
}

export default Login;
