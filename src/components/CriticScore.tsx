import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props{
    score: number;
}
const CriticScore = ({score}:Props) => {
    let color = score> 85 ? 'green': score > 75 ? 'yellow': '';
  return (
    <>
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
    </>
  )
};

export default CriticScore;
