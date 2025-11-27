import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ImageContext } from "../../pages/PhotosPage";
import type { AlbumPhotos } from "../../api/types";

interface ImageProps {
  photo: AlbumPhotos;
}

export const ImageTitleAndThumbnail = ({ photo }: ImageProps) => {
  const { setCurrentImageToPreview } = useContext(ImageContext);

  const handleClick = () => {
    setCurrentImageToPreview(photo);
  };

  return (
    <Box>
      <Typography fontWeight={700}>{`${photo.title}`}</Typography>

      <ImageList sx={{ width: "auto", height: "auto" }} rowHeight={150}>
        <Button onClick={handleClick}>
          <ImageListItem sx={{ width: "auto" }}>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
        </Button>
      </ImageList>
    </Box>
  );
};
