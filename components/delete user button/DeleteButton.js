"use client";
import { useRouter } from "next/navigation";
import styles from "./DeleteButton.module.css";
import { BASE_URL } from "@/api";

function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`${BASE_URL}/api/delete-user/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <button
      onClick={() => {
        handleDelete();
      }}
      className={styles.deleteUser}
    >
      X
    </button>
  );
}

export default DeleteButton;
