import { User } from "@/entitites/user.entity";

export function UserView({ user }: { user: User }) {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>{user.email}</p>
    </section>
  );
}
