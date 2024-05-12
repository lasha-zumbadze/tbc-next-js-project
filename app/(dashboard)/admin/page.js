import { getUsers } from "@/utilities/api";
import styles from "./users.module.css";
import Image from "next/image";

import userImg from "../../../public/images/user.png";
import DeleteButton from "@/components/admins/DeleteButton";
import Link from "next/link";
import Header from "@/components/Header";
import CreateUserForm from "@/components/admins/CreateUserForm";
import EditUserForm from "@/components/admins/EditUserForm";

async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <Header />
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
                  <Link
                    href={`?modal=edit&name=${user.name}&email=${user.email}&age=${user.age}`}
                  >
                    <button className={styles.editUser}>✏️</button>
                  </Link>
                  <DeleteButton id={user.id} />

                  {/* <Link href={`?modal=delete&id=${user.id}`}>
                    <button className={styles.deleteBtn}>X</button>
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="?modal=new">
          <button type="button" className={styles.addNewUser}>
            Add new
          </button>
        </Link>
        <div className="flex">
          <CreateUserForm />
          <EditUserForm />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
