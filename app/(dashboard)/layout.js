import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function DashboardLayout({ children }) {
  return (
    <div>
      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </div>
  );
}

export default DashboardLayout;
