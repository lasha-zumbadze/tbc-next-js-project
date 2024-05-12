"use client";

import { useRouter } from "next/navigation";
import styles from "./AddNewButton.module.css";
import { BASE_URL } from "@/utilities/api";

function AddNewButton({ pathname, name, email, age }) {
  const router = useRouter();

  async function handleAddNew() {
    const userData = {
      name,
      email,
      age,
    };

    await fetch(`${BASE_URL}/api/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }

  return (
    <button
      onClick={() => {
        handleAddNew();
        router.push(pathname);
      }}
      className={styles.addNewUser}
    >
      Save
    </button>
  );
}

export default AddNewButton;
