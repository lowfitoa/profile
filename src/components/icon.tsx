import { Img } from "@chakra-ui/image";
import { Link, LinkProps, Box } from "@chakra-ui/layout";

interface IconProps extends LinkProps {
  name: string;
  link: string;
}
export const Icon = ({ name, link }: IconProps) => {
  return (
    <Box filter="auto" blur="2px" _hover={{ blur: "none" }}>
      <Link href={link}>
        <Img src={`img/${name}.svg`} />
      </Link>
    </Box>
  );
};
