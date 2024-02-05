import Image from "next/image";

interface QuivrLogoProps {
  size: number;
  color?: "white" | "black" | "primary" | "accent";
}

export const QuivrLogo = ({
  size,
  color = "white",
}: QuivrLogoProps): JSX.Element => {
  let src = "/logo-white.svg";
  if (color === "primary") {
    src = "/logo-primary.svg";
  } else if (color === "accent") {
    src = "/logo-accent.svg";
  }

  return (
    <Image
      src={src}
      alt="WildcatGPT Logo"
      width={size}
      height={size}
    />
  );
};
