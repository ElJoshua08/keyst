import { UserView } from "@/app/users/[id]/user-view";
import { getUserByIdAction } from "./actions";

type Props = {
  params: { id: string };
};

export default async function UserPage({ params }: Props) {
  const user = await getUserByIdAction(params.id);
  return <UserView user={user} />;
}
