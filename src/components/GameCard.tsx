import { IGame } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: IGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((plat) => plat.platform)}
        />
        <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
