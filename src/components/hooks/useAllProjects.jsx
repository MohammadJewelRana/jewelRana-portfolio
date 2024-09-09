import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const {
    data: allProjects = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch("https://bt-sports-backend.vercel.app/api/user");
      // console.log(res);
      return res.json();
    },
  });

  return [userAll, allUserLoading, userRefetch];
};

export default useUser;
