import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { IPlatform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={7}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={3} marginBottom={4}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
