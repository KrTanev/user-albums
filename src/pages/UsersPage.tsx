import Box from "@mui/material/Box";
import { useGetUsers } from "../api/userController";
import { UserCard } from "../components/Users/UserCard";
import { Grid } from "@mui/material";

export const UsersPage = () => {
  const { data = [] } = useGetUsers();

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        {data.map((currentUser) => (
          <Grid size={3} sx={{ maxHeight: 250 }}>
            <UserCard key={currentUser.id} user={currentUser} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
