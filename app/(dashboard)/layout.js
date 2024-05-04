import { redirect } from "next/navigation";
import { cookies } from "next/headers";

function DashboardLayout({ children }) {
  const cookieStory = cookies();
  const cookie = cookieStory.get("user");

  if (!cookie) {
    redirect("/login");
  }

  return <div>{children}</div>;
}

export default DashboardLayout;
