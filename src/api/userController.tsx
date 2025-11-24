import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../config/axios.config";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/users");
      return data;
    },
  });
};
