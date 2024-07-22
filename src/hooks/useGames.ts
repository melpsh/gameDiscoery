import useData from "./useData";

export interface IPlatform{
    id: number;
    name: string;
    slug: string;
}

export interface IGame {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: IPlatform}[];
    metacritic: number;
}


const useGames = () => useData<IGame>('/games');

export default useGames;