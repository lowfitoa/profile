import { Img } from "@chakra-ui/image";
import { HStack, Link, Text } from "@chakra-ui/layout";
import { SpacerV } from "./spacerV";

interface Props {
  color: string;
}
export const TacoTuesday = ({ color }: Props) => {
  return (
    <>
      <Text fontSize="28px">Taco tuesday w/</Text>
      <HStack spacing={2} fontSize="20px">
        <Link cursor="none" href="https://www.instagram.com/kpcypehway6/" _hover={{ color: color }}>
          @HWAY6
        </Link>
        <Link
          cursor="none"
          href="https://www.instagram.com/h4nyangfromhanyang/"
          _hover={{ color: color }}
        >
          @H4NYANG
        </Link>
      </HStack>
      <SpacerV h="22px" />
      <Link href="https://youtu.be/fv_lfm-V_D0">
        <Img
          boxSize={"300px"}
          src="https://media-cdn.branch.so/01FSC1SW0WNT9AVTM13PQ6S1T2/taco.jpeg"
        />
      </Link>
    </>
  );
};
