import { getUsers } from "@/api";
import styles from "./users.module.css";
import Image from "next/image";

import userImg from "../../../public/images/user.png";
import DeleteButton from "@/components/delete user button/DeleteButton";
import Link from "next/link";
import Header from "@/components/Header";

async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <Header pageClass="admin" title="The Venue" subtitle="Users" />
      <div className={styles.usersContainer}>
        <table className={styles.users}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {users.map((user) => (
              <tr className={styles.userRow} key={user.id}>
                <td className={styles.userName}>
                  <Image src={userImg} alt="user" />
                  {user.name}
                </td>
                <td>{user.email}</td>
                <td className={styles.ageRow}>{user.age}</td>
                <td className={styles.correctRow}>
                  <button className={styles.editUser}>✏️</button>
                  <DeleteButton id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="?modal=true">
          <button type="button" className={styles.addNewUser}>
            Add new
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UsersPage;
