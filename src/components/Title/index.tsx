import { Heading } from "@chakra-ui/react";

type TitleProps = {
  children: string;
} & React.ComponentProps<"h2">;

export function Title({ children, ...rest }: TitleProps) {
  return (
    <Heading {...rest} size="4xl">
      {children}
    </Heading>
  );
}
