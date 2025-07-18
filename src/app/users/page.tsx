import { getUsersAction } from "@/app/users/actions";
import { CreateUser } from "@/app/users/create-user";
import { UsersList } from "@/app/users/users-list";

export default async function UsersPage() {
  const users = await getUsersAction();

  return (
    <div className="flex flex-col items-center justify-start gap-4 w-full h-dvh pb-20">
      <header className="flex items-center justify-center w-full py-5 border-b">
        <h1 className="text-2xl font-bold">Users List</h1>
      </header>

      <div className="flex items-center justify-center grow">
        <UsersList users={users} />
      </div>

      <CreateUser />
    </div>
  );
}
