import { Container, HStack, Stack } from "@chakra-ui/layout";

// import { AudioPlayer } from "./components/audio-player";
import { Icon } from "./components/icon";
import { SpacerV } from "./components/spacerV";
import { TacoTuesday } from "./components/taco-tuesday";
import { platforms } from "./controllers/platforms";

export const Toa = () => {
  const MAIN_COLOR = "#1F4796";

  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"} height="100vh" spacing={0}>
        <TacoTuesday color={MAIN_COLOR} />

        {/* <AudioPlayer /> */}

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
