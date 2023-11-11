import { Box, Button, Container, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { SpacerV } from "../../components/spacerV";

export const Durak = () => {
  const cozerk = ["♠", "♦", "♥", "♣"];
  const [cozerkIndex, setCozerkIndex] = useState<number>(0);

  const [dashaCount, setDashaCount] = useState<number>(0);
  const [toaCount, setToaCount] = useState<number>(0);
  const [drawCount, setDrawCount] = useState<number>(0);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
      spacing={0}
    >
      <Text fontSize={120} color="#2AFC7B">
        DURAK
      </Text>

      <SpacerV h="22px" />
      <HStack spacing={"40px"} pb={"40px"}>
        <Button
          onClick={() => {
            if (cozerkIndex === 3) {
              setCozerkIndex(0);
              return;
            }
            setCozerkIndex(cozerkIndex + 1);
          }}
        ></Button>
        <Box px={"60px"} borderWidth={"3px"} borderRadius={16} py="90px">
          <Text
            color="white"
            fontSize={"100px"}
            minW={"100px"}
            textAlign="center"
          >
            {cozerk[cozerkIndex]}
          </Text>
        </Box>
        <Button
          onClick={() => {
            if (cozerkIndex === 0) {
              setCozerkIndex(3);
              return;
            }
            setCozerkIndex(cozerkIndex - 1);
          }}
        />
      </HStack>

      <HStack w="full" justifyContent={"space-between"} maxW="500px">
        <CountCard name="Dasha" count={dashaCount} setCount={setDashaCount} />
        <CountCard name="Draw" count={drawCount} setCount={setDrawCount} />
        <CountCard name="Toa" count={toaCount} setCount={setToaCount} />
      </HStack>
    </Stack>
  );
};

interface CountCardProps {
  name: string;
  count: number;
  setCount: (count: number) => void;
}
const CountCard = ({ name, count, setCount }: CountCardProps) => {
  return (
    <Stack alignItems={"center"} flex={1}>
      <Text color="white" fontSize={"30px"}>
        {name}
      </Text>
      <HStack>
        <Button
          variant={"outline"}
          color={"white"}
          onClick={() => {
            if (count === 0) {
              return;
            }
            setCount(count - 1);
          }}
        >
          -
        </Button>
        <Text
          color="white"
          fontSize={"30px"}
          minW={"30px"}
          textAlign={"center"}
        >
          {count}
        </Text>
        <Button
          variant={"outline"}
          color={"white"}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </HStack>
    </Stack>
  );
};
