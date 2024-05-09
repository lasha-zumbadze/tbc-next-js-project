import Modal from "@/components/Modal";

function LoginLayout({ children }) {
  return (
    <div>
      {children}
      <Modal />
    </div>
  );
}

export default LoginLayout;
