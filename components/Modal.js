"use client";
import styles from "./Modal.module.css";
import DeleteButton from "./admins/DeleteButton";
import CreateUserForm from "./admins/CreateUserForm";
import UpdateUserForm from "./admins/UpdateUserForm";

function Modal({ users, userId, modal, setModal }) {
  const user = users.find((user) => user.id === userId);

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-[#ead7ba] m-auto rounded-2xl">
        <div className="flex flex-col items-center">
          {modal === "new" && <CreateUserForm setModal={setModal} />}

          {modal === "update" && (
            <UpdateUserForm id={userId} user={user} setModal={setModal} />
          )}

          {modal === "delete" && (
            <div className={styles.deleteBox}>
              <div className="p-12 ">
                <p className={styles.deleteString}>
                  Are you sure you want to delete the user?
                </p>
                <div className="flex gap-10 justify-center">
                  <DeleteButton id={userId} setModal={setModal} />

                  <button
                    onClick={() => setModal("")}
                    type="button"
                    className="border-none bg-[#ac7e3dd2] text-[2rem] py-[1rem] px-[2rem] text-white cursor-pointer transition-all duration-[0.1s] rounded-md w-fit hover:outline hover:outline-[#a27434] hover:bg-[#c2a49500] hover:text-[#a27434]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
