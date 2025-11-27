import { Button, Card, CardActions, CardContent } from "@mui/material";
import { TitleValue } from "../common/TitleValue";
import type { UserAlbums } from "../../api/types";
import { useNavigate } from "react-router-dom";

export const Albums = ({ album }: { album: UserAlbums }) => {
  const navigate = useNavigate();

  function handleClick(albumId: number) {
    navigate(`/albums/${albumId}/photos`);
  }
  return (
    <Card>
      <CardContent>
        <TitleValue title="User ID" value={album.userId.toString()} />
        <TitleValue title="Album ID" value={album.id.toString()} />
        <TitleValue title="Album Title" value={album.title} />
        <CardActions>
          <Button variant="contained" onClick={() => handleClick(album.id)}>
            Open Album
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
