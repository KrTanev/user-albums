import { useGetUsers } from "../api/userController";

export const UsersPage = () => {
  const { data } = useGetUsers();
  console.log(data);

  return <div>Users</div>;
};
