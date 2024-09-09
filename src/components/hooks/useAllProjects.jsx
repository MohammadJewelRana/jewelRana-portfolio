// import { useQuery } from "@tanstack/react-query";

// const useAllProjects = () => {
//   const {
//     data: allProjects = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["user"],
//     // enabled: loading,

//     queryFn: async () => {
//       const res = await fetch("https://jewelrana-portfolio-server.vercel.app/api");
//       // console.log(res);
//       return res.json();
//     },
//   });

//   return [allProjects, isLoading, refetch];
// };

// export default useAllProjects;



import { useState, useEffect } from "react";
import axios from "axios";

const useAllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllProjects = async () => {
    try {
      const response = await axios.get("https://jewelrana-portfolio-server.vercel.app/api"); // Adjust the API URL if necessary
      setAllProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return [allProjects, isLoading, fetchAllProjects];
};

export default useAllProjects;