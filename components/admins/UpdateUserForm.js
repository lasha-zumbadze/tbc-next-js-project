"use client";

import styles from "./UpdateUserForm.module.css";
import { updateUser } from "@/app/action";
import { useState } from "react";

function UpdateUserForm({ id, user, setModal }) {
  const userName = user.name;
  const userEmail = user.email;
  const userAge = user.age;

  const [name, setName] = useState(userName || "");
  const [email, setEmail] = useState(userEmail || "");
  const [age, setAge] = useState(userAge || "");

  return (
    <form
      action={() => {
        updateUser(id, name, email, age);
        setModal("");
      }}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="User name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="User email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="User age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <div className="flex gap-14 mt-8">
        <button type="submit" className={styles.addNewUser}>
          Save
        </button>

        <button
          onClick={() => setModal("")}
          type="button"
          className="border-none bg-[#ac7e3dd2] text-[2rem] px-8 text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
