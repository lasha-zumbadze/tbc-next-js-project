import Modal from "../../../components/Modal";

function AdminLayout({ children }) {
  return (
    <div>
      {children}
      <Modal />
    </div>
  );
}

export default AdminLayout;
