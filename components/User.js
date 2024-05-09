import styles from "./User.module.css";
import Image from "next/image";

import userImg from "../public/images/user.png";

function User({ name, age, email }) {
  return (
    <div className={styles.userCart}>
      <Image src={userImg} alt="user" />
      <div className={styles.userInfo}>
        <h2>{name}</h2>
        <div>
          <p>{age} years old</p>
          <p>{email}</p>
        </div>
      </div>
      <button className={styles.deleteUser}>X</button>
    </div>
  );
}

export default User;
