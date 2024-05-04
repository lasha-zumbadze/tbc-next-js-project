"use client";

import { useState } from "react";
import styles from "./LoginForm.module.css";
import { login } from "@/app/action";

function Login() {
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Log in</h1>
        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.loginBtn}
          type="button"
          onClick={() => login(username, password)}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
