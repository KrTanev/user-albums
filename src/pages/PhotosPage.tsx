import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetAlbumPhotos } from "../api/photoController";
import { Photos } from "../components/userPhotos/Photos";

export const PhotosPage = () => {
  const params = useParams();
  console.log(params);

  const { data = [] } = useGetAlbumPhotos(Number(params.id));

  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        {data.map((photos) => (
          <Grid key={photos.id} size={3}>
            <Photos photo={photos} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
