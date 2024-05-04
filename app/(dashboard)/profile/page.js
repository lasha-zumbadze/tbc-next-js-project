"use client";

import styles from "./Profile.module.css";
import Navigation from "../../../components/Navigation";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <>
      <Navigation />
      <div className={styles.profilePage}>
        <h2>Create Profile</h2>
        <form className={styles.profileForm}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="lastname">Your lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="newPasword">New password</label>
          <input
            type="password"
            id="newPassword"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <label htmlFor="confirmPass">Confirm new password</label>
          <input
            type="password"
            id="confirmPass"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          {confirmPass && password !== confirmPass && (
            <p className={styles.confirmation}>Password does not match</p>
          )}
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
