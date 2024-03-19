import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../api";
const useUser = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "user",
    async () => {
      try {
        const userDeatail = await getUserDetail();
        return userDeatail;
      } catch (error) {
        if (!error.messages.includes("not authenticated")) {
          toast.error("Something went wrong");
        }
      }
    },
    {
      refetchOnWindowFocus: false,
    }   
  );
  return {data, isLoading, isError, refetch}
};

export default useUser;
