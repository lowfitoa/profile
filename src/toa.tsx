import { Container, HStack, Stack, Text, Link } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Icon } from "./components/icon";
import { SpacerV } from "./components/spacerV";
import { platforms } from "./controllers/platforms";

export const Toa = () => {
  const MAIN_COLOR = "#2AFC7B";

  const [imageOrder, setImageOrder] = useState(1);

  const [iconBlur, setIconBlur] = useState(0);

  const [toggleColor, setToggleColor] = useState(true);

  const changeOrder = (order: number) => {
    if (order === 7) {
      setImageOrder(1);
      return;
    }
    setImageOrder(order + 1);
  };

  const changeBlur = (blur: number) => {
    if(blur === 2){
      setIconBlur(0);
      return
    }
    setIconBlur(blur + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      changeOrder(imageOrder);
      changeBlur(iconBlur);
      setToggleColor(!toggleColor);
    }, 240);
    return;
  }, [imageOrder, toggleColor]);

  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"} height="100vh" spacing={0} paddingBottom="30%">
        <Link href={'https://www.instagram.com/knownastoa/'}>
          <Text textShadow="1px 1px #2AFC7B" fontSize={60} _hover={{ color: MAIN_COLOR, cursor: "none" }} color={toggleColor ? undefined : MAIN_COLOR}>
            KnownAsToa
          </Text>
        </Link>
        
        <Link href={'https://www.instagram.com/knownastoa/'}>
          <Img src={`img/${JSON.stringify(imageOrder)}.jpg`} />
        </Link>

        <SpacerV h="22px" />

        <HStack>
          {platforms.map((item, index) => (
            <Icon blur={index === iconBlur ? 0 : 2} key={item.name} name={item.name} link={item.link} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};
