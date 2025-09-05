type TitleProps = {
  children: string;
} & React.ComponentProps<"h2">;

export function Title({ children, ...rest }: TitleProps) {
  return <h2 {...rest}>{children}</h2>;
}
