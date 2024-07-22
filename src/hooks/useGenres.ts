import useData from "./useData";

export interface IGenre {
    id: number;
    name: string;
  }

const useGenres = () => useData<IGenre>('/genres')

export default useGenres;
