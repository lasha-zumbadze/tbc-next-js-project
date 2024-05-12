"use client";

import { editUser } from "@/app/action";
import styles from "./EditUserForm.module.css";

function EditUserForm(id) {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="User name" name="name" />
      <input type="email" placeholder="User email" name="email" />
      <input type="number" placeholder="User age" name="age" />
      <button onClick={() => editUser(id)} type="submit">
        Save
      </button>
    </form>
  );
}

export default EditUserForm;
