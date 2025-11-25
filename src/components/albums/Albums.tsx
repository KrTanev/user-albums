import { Button, Card, CardActions, CardContent } from "@mui/material";
import { TitleValue } from "../common/TitleValue";
import type { UserAlbums } from "../../api/types";

export const Albums = ({ album }: { album: UserAlbums }) => {
  return (
    <Card key={album.id}>
      <CardContent>
        <TitleValue title="User ID" value={album.userId.toString()} />
        <TitleValue title="Album ID" value={album.id.toString()} />
        <TitleValue title="Album Title" value={album.title} />
        <CardActions>
          <Button>Open Album</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
