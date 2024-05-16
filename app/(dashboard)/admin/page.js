import { getUsers } from "@/api";
import Header from "@/components/Header";
import Users from "@/components/admins/UsersTable";

async function AdminPage() {
  const users = await getUsers();

  return (
    <div>
      <Header />
      <Users users={users} />
    </div>
  );
}

export default AdminPage;
