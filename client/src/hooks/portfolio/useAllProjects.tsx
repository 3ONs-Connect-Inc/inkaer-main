import { fetchAllProjects } from "@/firebase/fetchAllProjects";
import type { Project } from "@/types/types";
import { useEffect, useState } from "react";


export const useAllProjects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchAllProjects();
        setAllProjects(data);
      } catch (err) {
        setError("Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { allProjects, loading, error };
};
