import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";
import type { UserAlbums } from "./types";

export const albumKeys = {
  allAlbums: "allAlbums",
  userAlbum: (userId: number) => `userAlbum-${userId}`,
};

export const useGetUserAlbum = (userId: number) => {
  return useQuery<UserAlbums[]>({
    queryKey: [albumKeys.userAlbum],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/albums?userId=${userId}`);
      return data;
    },
  });
};

export const useGetAllAlbums = () => {
  return useQuery<UserAlbums[]>({
    queryKey: [albumKeys.allAlbums],
    queryFn: async () => {
      const { data } = await axiosClient.get("/albums");
      return data;
    },
  });
};
