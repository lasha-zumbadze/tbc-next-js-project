import styles from "./CreateUserForm.module.css";
import { createUser } from "@/app/action";

function CreateUserForm() {
  return (
    <form action={createUser} className={styles.form}>
      <input type="text" placeholder="User name" name="name" />
      <input type="email" placeholder="User email" name="email" />
      <input type="number" placeholder="User age" name="age" />
      <button type="submit">create</button>
    </form>
  );
}

export default CreateUserForm;
