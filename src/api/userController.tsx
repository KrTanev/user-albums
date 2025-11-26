import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";
import type { UserResponse } from "./types";

export const userKeys = {
  allUsers: "allUsers",
};

export const useGetUsers = () => {
  return useQuery<UserResponse[]>({
    queryKey: [userKeys.allUsers],
    queryFn: async () => {
      const { data } = await axiosClient.get("/users");
      return data;
    },
  });
};
