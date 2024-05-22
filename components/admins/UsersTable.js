"use client";

import styles from "./UsersTable.module.css";

import userImg from "../../public/images/user.png";

import Modal from "../Modal";
import Image from "next/image";
import { useRef, useState } from "react";

function Users({ users }) {
  const userId = useRef();
  const [modal, setModal] = useState("");

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
                  <button
                    onClick={() => {
                      userId.current = user.id;
                      setModal("update");
                    }}
                    className={styles.editUser}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => {
                      userId.current = user.id;
                      setModal("delete");
                    }}
                    className={styles.deleteBtn}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setModal("new")}
          type="button"
          className={styles.addNewUser}
        >
          Add new
        </button>
      </div>
      {modal && (
        <Modal
          users={users}
          userId={userId.current}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
}

export default Users;
