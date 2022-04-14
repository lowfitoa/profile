import { Img } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { useRef, useState } from "react";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [paused, setPaused] = useState(true);

  const togglePlay = () => {
    if (paused) {
      audioRef.current?.play();
      setPaused(!paused);
      return;
    }
    audioRef.current?.pause();
    setPaused(!paused);
    return;
  };

  return (
    <>
      <Text onClick={togglePlay} _hover={{ cursor: "pointer" }}>
        {paused ? (
          <Img src="https://media-cdn.branch.so/01FSC1T29GPJ6C7C558CY6MDZW/play-b.svg" />
        ) : (
          <Img src="https://media-cdn.branch.so/01FSC1T29GPJ6C7C558CY6MDZW/pause.svg" />
        )}
      </Text>

      <audio ref={audioRef}>
        <source src="https://media-cdn.branch.so/01FSC1T29GPJ6C7C558CY6MDZW/foo.wav" type="audio/wav"></source>
      </audio>
    </>
  );
};
