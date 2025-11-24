import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";
import type { UserResponse } from "./types";

export const useGetUsers = () => {
  return useQuery<UserResponse[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/users");
      return data;
    },
  });
};
