import { Button, Card, CardActions, CardContent } from "@mui/material";
import type { UserResponse } from "../../api/types";
import { TitleValue } from "../common/TitleValue";

export const UserCard = ({ user }: { user: UserResponse }) => {
  return (
    <Card key={user.id} sx={{ padding: 0, margin: 0, border: 2 }}>
      <CardContent sx={{ padding: 0.5, margin: 0, pb: 0 }}>
        <TitleValue title="User name" value={user.name} />
        <TitleValue title="Email" value={user.email} />
        <TitleValue title="City" value={user.address.city} />
        <TitleValue title="Street" value={user.address.street} />
        <TitleValue title="Phone" value={user.phone} />
        <TitleValue title="Website" value={user.website} />
        <TitleValue title="Company name" value={user.company.name} />

        <CardActions sx={{ p: 0, m: 0 }}>
          <Button
            sx={{ display: "flex", marginLeft: "auto" }}
            variant="contained"
            size="small"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Albums
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
