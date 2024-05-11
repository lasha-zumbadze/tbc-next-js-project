import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function DashboardLayout({ children }) {
  const cookieStory = cookies();
  const cookie = cookieStory.get("user");

  if (!cookie) {
    redirect("/login");
  }

  return (
    <div>
      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </div>
  );
}

export default DashboardLayout;
