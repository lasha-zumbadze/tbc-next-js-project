import { getUsers } from "@/api";
import Header from "@/components/Header";
import Users from "@/components/admins/UsersTable";

async function AdminPage() {
  const usersData = await getUsers();
  const users = usersData.sort((a, b) => b.id - a.id);

  return (
    <div>
      <Header />
      <Users users={users} />
    </div>
  );
}

export default AdminPage;
