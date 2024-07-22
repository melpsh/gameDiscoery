import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface IGenre {
    id: number;
    name: string;
  }

  interface IFetchGenresResponse {
    count: number;
    results: IGenre[];
  }

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<IFetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    setIsLoading(false);

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
