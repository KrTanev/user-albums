import { Card, CardContent } from "@mui/material";
import type { AlbumPhotos } from "../../api/types";
import { TitleValue } from "../common/TitleValue";
import { ImageTitleAndThumbnail } from "../common/ImageTitleAndThumbnail";

export const Photos = ({ photo }: { photo: AlbumPhotos }) => {
  return (
    <Card sx={{ padding: 0, margin: 0, border: 2 }}>
      <CardContent>
        <TitleValue title="Album ID" value={photo.albumId.toString()} />
        <TitleValue title="Photo ID" value={photo.id.toString()} />
        <ImageTitleAndThumbnail photo={photo} />
      </CardContent>
    </Card>
  );
};
