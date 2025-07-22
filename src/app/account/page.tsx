import { getUserController } from "@/interface-adapters/controllers/get-user.controller";

export default async function AccountPage() {
  const user = await getUserController();

  return <div>{JSON.stringify(user)}</div>;
}
