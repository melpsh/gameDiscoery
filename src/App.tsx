import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { IPlatform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
  const [selectedPlatform, setSelectedPlatfom] = useState<IPlatform | null>(null);
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '300px 1fr'
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={7}>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector onSelectPlatform={(plarform)=> setSelectedPlatfom(plarform)} selectedPlatform={selectedPlatform} />
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
