import { Card, CardContent, Typography } from "@mui/material";
import type { UserResponse } from "../../api/types";

export const UserCard = ({ user }: { user: UserResponse }) => {
  return (
    <Card key={user.id} sx={{ minHeight: 250, border: 2 }}>
      <CardContent>
        <Typography>User name: {user.name}</Typography>
        <Typography>Email address: {user.email}</Typography>
        <Typography>City: {user.address.city}</Typography>
        <Typography>Street: {user.address.street}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Typography>Company name: {user.company.name}</Typography>
      </CardContent>
    </Card>
  );
};
