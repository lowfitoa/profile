import { Img } from "@chakra-ui/image";
import { Link, LinkProps } from "@chakra-ui/layout";

interface IconProps extends LinkProps {
  name: string;
  link: string;
}
export const Icon = ({ name, link }: IconProps) => {
  return (
    <Link href={link}>
      <Img src={`https://media-cdn.branch.so/01FSC1T29GPJ6C7C558CY6MDZW/${name}.svg`} />
    </Link>
  );
};
