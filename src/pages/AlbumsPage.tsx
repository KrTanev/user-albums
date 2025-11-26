import { useParams } from "react-router-dom";
import { useGetUserAlbum } from "../api/albumsController";
import { Box, Grid } from "@mui/material";
import { Albums } from "../components/albums/Albums";

export const AlbumsPage = () => {
  const params = useParams();

  const { data = [] } = useGetUserAlbum(Number(params.id));

  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        {data.map((albums) => (
          <Grid key={albums.id} size={3}>
            <Albums album={albums} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
