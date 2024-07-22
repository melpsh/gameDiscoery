import useData from "./useData";

interface IPlatform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms =() => useData<IPlatform>('/platforms/lists/parents');

export default usePlatforms;