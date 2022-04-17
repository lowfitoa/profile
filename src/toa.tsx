import { Container, HStack, Stack, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Icon } from "./components/icon";
import { SpacerV } from "./components/spacerV";
import { platforms } from "./controllers/platforms";

export const Toa = () => {
  const MAIN_COLOR = "#2AFC7B";

  const [imageOrder, setImageOrder] = useState(1);

  useEffect(() => {
    if (imageOrder !== 7) {
      setTimeout(() => {
        setImageOrder(imageOrder + 1);
      }, 100);
      return;
    }
  }, [imageOrder]);

  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"} height="100vh" spacing={0} paddingBottom="30%">
        <Text textShadow="1px 1px #2AFC7B" fontSize={60} _hover={{ color: MAIN_COLOR, cursor: "none" }}>
          KnownAsToa
        </Text>

        <Img src={`img/${JSON.stringify(imageOrder)}.jpg`} />

        <SpacerV h="22px" />

        <HStack>
          {platforms.map((item) => (
            <Icon key={item.name} name={item.name} link={item.link} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};
