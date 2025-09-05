import { Heading } from "@radix-ui/themes";

type TitleProps = {
  children: string;
} & React.ComponentProps<"h2">;

export function Title({ children, ...rest }: TitleProps) {
  return (
    <Heading as="h2" size="8">
      {children}
    </Heading>
  );
}
