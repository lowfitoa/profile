import { Container, HStack, Stack, Text, Link } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Icon } from "./components/icon";
import { SpacerV } from "./components/spacerV";
import { platforms } from "./controllers/platforms";
import { range } from "lodash";

export const Toa = () => {
  const MAIN_COLOR = "#2AFC7B";

  const [imageOrder, setImageOrder] = useState(1);

  const [toggleColor, setToggleColor] = useState(true);

  const changeOrder = (order: number) => {
    if (order === 6) {
      setImageOrder(0);
      return;
    }
    setImageOrder(order + 1);
  };

  const fooArr = range(0, 7).map((item) => ({
    name: `image-${item}`,
    comp: (index: number) => (
      <Img
        display={index === imageOrder ? undefined : "none"}
        src={`img/${JSON.stringify(item)}.jpg`}
      />
    ),
    imageName: `img/${JSON.stringify(item)}.jpg`,
  }));

  useEffect(() => {
    setTimeout(() => {
      changeOrder(imageOrder);
      setToggleColor(!toggleColor);
    }, 240);
    return;
  }, [imageOrder, toggleColor]);

  return (
    <Container>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        height="100vh"
        spacing={0}
        paddingBottom="30%"
      >
        <Link
          href={
            "https://open.spotify.com/artist/3lCSUS2OhV9vdwsuRmo3nq?si=nLHQnKDnRD6jwxBnAjlLtw"
          }
        >
          <Text
            textShadow="1px 1px #2AFC7B"
            fontSize={60}
            _hover={{ color: MAIN_COLOR, cursor: "none" }}
            color={toggleColor ? undefined : MAIN_COLOR}
          >
            KnownAsToa
          </Text>
        </Link>

        <Link
          href={
            "https://open.spotify.com/artist/3lCSUS2OhV9vdwsuRmo3nq?si=nLHQnKDnRD6jwxBnAjlLtw"
          }
        >
          {fooArr.map((item, index) => item.comp(index))}
        </Link>

        <SpacerV h="22px" />

        <HStack>
          {platforms.map((item) => (
            <Icon blur={2} key={item.name} name={item.name} link={item.link} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};
