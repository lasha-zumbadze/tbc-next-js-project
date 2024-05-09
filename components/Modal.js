"use client";
import styles from "./Modal.module.css";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import AddNewButton from "./add user button/AddNewButton";

function Modal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-[#ead7ba] m-auto p-8 rounded-2xl">
            <div className="flex flex-col items-center">
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

              <div className="flex gap-10">
                {name && email && age && (
                  <AddNewButton
                    pathname={pathname}
                    name={name}
                    email={email}
                    age={age}
                  />
                )}

                <Link href={pathname}>
                  <button
                    type="button"
                    className="border-none bg-[#ac7e3d] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
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
