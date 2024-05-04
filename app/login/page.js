import { cookies } from "next/headers";
import LoginForm from "../../components/LoginForm";
import { redirect } from "next/navigation";

function UserLogin() {
  const cookieStory = cookies();
  const cookie = cookieStory.get("user");

  if (cookie) redirect("/");

  return <LoginForm />;
}

export default UserLogin;
