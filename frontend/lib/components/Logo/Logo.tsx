import Image from "next/image";
import Link from "next/link";

export const Logo = (): JSX.Element => {
  return (
    <Link
      data-testid="app-logo"
      href={"/chat"}
      className="flex items-center gap-4"
    >
      <Image
        src={"/logo-wildcat-gpt.svg"}
        alt="WildcatGPT Logo"
        width={24}
        height={24}
      />
      <h1 className="font-bold">WildcatGPT</h1>
    </Link>
  );
};
