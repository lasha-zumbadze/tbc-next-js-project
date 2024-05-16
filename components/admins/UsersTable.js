"use client";

import styles from "./UsersTable.module.css";

import userImg from "../../public/images/user.png";

import Link from "next/link";
import Modal from "../Modal";
import Image from "next/image";
import { useRef } from "react";

function Users({ users }) {
  const userId = useRef();

  return (
    <>
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

                  <Link href="?modal=delete">
                    <button
                      onClick={() => {
                        userId.current = user.id;
                      }}
                      className={styles.deleteBtn}
                    >
                      X
                    </button>
                  </Link>
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
        <div className="flex">{/* <EditUserForm /> */}</div>
      </div>
      <Modal userId={userId.current} />
    </>
  );
}

export default Users;
