import { Card, CardContent } from "@mui/material";
import type { AlbumPhotos } from "../../api/types";
import { TitleValue } from "../common/TitleValue";

export const Photos = ({ photo }: { photo: AlbumPhotos }) => {
  return (
    <Card sx={{ padding: 0, margin: 0, border: 2 }}>
      <CardContent>
        <TitleValue title="Photo Title" value={photo.title} />
        <TitleValue title="Album ID" value={photo.albumId.toString()} />
        <TitleValue title="Photo ID" value={photo.id.toString()} />
        <TitleValue title="Photo url" value={photo.url} />
        <TitleValue title="Photo thumbnail url" value={photo.thumbnailUrl} />
      </CardContent>
    </Card>
  );
};
