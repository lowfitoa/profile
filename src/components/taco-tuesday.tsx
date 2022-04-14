import { Img } from "@chakra-ui/image";
import { HStack, Link, Text } from "@chakra-ui/layout";
import { SpacerV } from "./spacerV";

interface Props {
  color: string;
}
export const TacoTuesday = ({ color }: Props) => {
  return (
    <>
      <Text fontSize="25px">Taco tuesday w/</Text>
      <HStack spacing={2}>
        <Link href="https://www.instagram.com/kpcypehway6/" fontSize="25px" _hover={{ cursor: "pointer", color: color }}>
          @HWAY6
        </Link>
        <Link href="https://www.instagram.com/h4nyangfromhanyang/" fontSize="25px" _hover={{ cursor: "pointer", color: color }}>
          @H4NYANG
        </Link>
      </HStack>
      <SpacerV h="22px" />
      <Link href="https://open.spotify.com/track/5fgZLijZnYUl9ckhaNjxAe?si=f2ec5d2f99a14616">
        <Img boxSize={"300px"} src="https://media-cdn.branch.so/01FSC1SW0WNT9AVTM13PQ6S1T2/taco.jpeg" />
      </Link>
    </>
  );
};
