/* eslint-disable react-hooks/set-state-in-effect */
import { Box, Button, Dialog, DialogTitle, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetAlbumPhotos } from "../api/photoController";
import { Photos } from "../components/photos/Photos";
import { createContext, useState } from "react";
import type { AlbumPhotos } from "../api/types";

interface ImageContextInterface {
  currentImageToPreview: AlbumPhotos | undefined;
  setCurrentImageToPreview: React.Dispatch<
    React.SetStateAction<AlbumPhotos | undefined>
  >;
}

const imageContextInitialValue = {
  currentImageToPreview: undefined,
  setCurrentImageToPreview: () => null,
};
// eslint-disable-next-line react-refresh/only-export-components
export const ImageContext = createContext<ImageContextInterface>(
  imageContextInitialValue
);

// eslint-disable-next-line react-refresh/only-export-components
export function prevOrLastButtonStatusDisabled(
  selectedImageIndex: number,
  photos: AlbumPhotos[]
) {
  let isPrevEnabled = false;
  let isNextEnabled = false;

  if (selectedImageIndex === 0) {
    isPrevEnabled = true;
  }

  if (photos?.length - 1 === selectedImageIndex) {
    isNextEnabled = true;
  }

  return { isPrevEnabled, isNextEnabled };
}

export const PhotosPage = () => {
  const params = useParams();

  const { data = [] } = useGetAlbumPhotos(Number(params.id));
  const [currentImageToPreview, setCurrentImageToPreview] =
    useState<AlbumPhotos>();

  const selectedImageIndex = currentImageToPreview
    ? data.map((photo) => photo.id).indexOf(currentImageToPreview?.id)
    : undefined;

  const handleNextButton = () => {
    if (currentImageToPreview && selectedImageIndex) {
      setCurrentImageToPreview(data[selectedImageIndex + 1]);
    }
  };

  const handlePrevButton = () => {
    if (currentImageToPreview && selectedImageIndex) {
      setCurrentImageToPreview(data[selectedImageIndex - 1]);
    }
  };

  const handleClose = () => {
    setCurrentImageToPreview(undefined);
  };

  return (
    <ImageContext value={{ currentImageToPreview, setCurrentImageToPreview }}>
      <Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          {data.map((photo) => (
            <Grid key={photo.id} size={3}>
              <Photos photo={photo} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={Boolean(currentImageToPreview)} onClose={handleClose}>
        <DialogTitle>{currentImageToPreview?.title}</DialogTitle>
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={handlePrevButton}
            disabled={selectedImageIndex == 0 ? true : false}
            // disabled={
            //   prevOrLastButtonStatusDisabled(selectedImageIndex!, data)
            //     .isPrevEnabled
            // }
          >
            Prev
          </Button>
          <Box sx={{ height: "500", width: "500" }}>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              width={"400"}
              height={"400"}
            />
          </Box>
          <Button
            onClick={handleNextButton}
            disabled={selectedImageIndex == data.length - 1 ? true : false}
            // disabled={
            //   prevOrLastButtonStatusDisabled(selectedImageIndex!, data)
            //     .isNextEnabled
            // }
          >
            Next
          </Button>
        </Box>
      </Dialog>
    </ImageContext>
  );
};
