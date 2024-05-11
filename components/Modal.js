"use client";
import styles from "./Modal.module.css";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import AddNewButton from "./add user button/AddNewButton";
import DeleteButton from "./delete user button/DeleteButton";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const userName = searchParams.get("name");
  const userEmail = searchParams.get("email");
  const userAge = searchParams.get("age");
  const userId = searchParams.get("id");
  const pathname = usePathname();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-[#ead7ba] m-auto p-8 rounded-2xl">
            <div className="flex flex-col items-center">
              {modal === "new" && (
                <form className={styles.modalForm}>
                  <input
                    type="text"
                    placeholder="User name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="User email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="User age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </form>
              )}

              {modal === "edit" && (
                <form className={styles.modalForm}>
                  <input
                    type="text"
                    placeholder="User name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="User email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="User age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </form>
              )}

              {modal === "delete" && (
                <p className={styles.deleteString}>
                  Are you sure you want to delete the user?
                </p>
              )}

              <div className="flex gap-10">
                {name && email && age && (
                  <AddNewButton
                    pathname={pathname}
                    name={name}
                    email={email}
                    age={age}
                  />
                )}

                {modal === "delete" && (
                  // <button className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]">
                  //   Delete
                  // </button>
                  <Link href={pathname}>
                    <DeleteButton id={userId} />
                  </Link>
                )}

                <Link href={pathname}>
                  <button
                    type="button"
                    className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
