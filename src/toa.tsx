import { Container, HStack, Stack } from "@chakra-ui/layout";

import { AudioPlayer } from "./components/audio-player";
import { Icon } from "./components/icon";
import { SpacerV } from "./components/spacerV";
import { TacoTuesday } from "./components/taco-tuesday";
import { platforms } from "./controllers/platforms";
import { useLocation } from "react-router-dom";
export const Toa = () => {
  const MAIN_COLOR = "#1F4796";
  const { pathname } = useLocation();

  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"} height="100vh" spacing={0}>
        {pathname === "/lofi" ? <AudioPlayer /> : <TacoTuesday color={MAIN_COLOR} />}

        <SpacerV h="32px" />

        <SpacerV h="10px" bg={MAIN_COLOR} />

        <SpacerV h="22px" />

        <HStack>
          {platforms.map((item) => (
            <Icon key={item.name} name={item.name} link={item.link} />
          ))}
        </HStack>

        <SpacerV paddingBottom="30%" />
      </Stack>
    </Container>
  );
};
