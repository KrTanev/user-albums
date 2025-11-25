import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";
import type { UserAlbums } from "./types";

export const useGetUserAlbum = (userId: number) => {
  return useQuery<UserAlbums[]>({
    queryKey: [`userAlbums-${userId}`],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/albums?userId=${userId}`);
      return data;
    },
  });
};

export const useGetAllAlbums = () => {
  return useQuery<UserAlbums[]>({
    queryKey: [`{id}`],
    queryFn: async () => {
      const { data } = await axiosClient.get("/albums");
      return data;
    },
  });
};
