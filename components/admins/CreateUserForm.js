"use client";

import { useRouter } from "next/navigation";
import styles from "./CreateUserForm.module.css";
import { createUser } from "@/app/action";

function CreateUserForm() {
  const router = useRouter();
  return (
    <form action={createUser} className={styles.form}>
      <input type="text" placeholder="User name" name="name" />
      <input type="email" placeholder="User email" name="email" />
      <input type="number" placeholder="User age" name="age" />
      <div className="flex gap-14 mt-8">
        <button type="submit" className={styles.addNewUser}>
          Create
        </button>

        <button
          onClick={() => router.push("/admin")}
          type="button"
          className="border-none bg-[#ac7e3dd2] text-[2rem] px-8 text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateUserForm;
