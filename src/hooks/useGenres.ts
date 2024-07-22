import useData from "./useData";

export interface IGenre {
    id: number;
    name: string;
    image_background: string
  }

const useGenres = () => useData<IGenre>('/genres')

export default useGenres;
