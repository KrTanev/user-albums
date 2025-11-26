import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";
import type { AlbumPhotos } from "./types";

export const albumKeys = {
  album: (albumId: number) => `albumId-${albumId}`,
};

export const useGetAlbumPhotos = (albumId: number) => {
  return useQuery<AlbumPhotos[]>({
    queryKey: [albumKeys.album(albumId)],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/albums/${albumId}/photos`);
      return data;
    },
  });
};
