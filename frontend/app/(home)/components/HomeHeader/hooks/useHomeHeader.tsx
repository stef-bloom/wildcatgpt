import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";

import { useHomepageTracking } from "@/app/(home)/hooks/useHomepageTracking";
import { cn } from "@/lib/utils";

import { linkStyle } from "../styles";
import { NavbarItem } from "../types";

type UseHomeHeaderProps = {
  color: "white" | "black";
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useHomeHeader = ({ color }: UseHomeHeaderProps) => {
  const { t } = useTranslation("home");
  const { onLinkClick } = useHomepageTracking();

  const navItems: NavbarItem[] = [
    { href: "/pricing", label: t("pricing"), rightIcon: null },
    { href: "/login", label: t("sign_in") },
  ];

  const navLinks = (device: "mobile" | "desktop") =>
    navItems.map(
      ({ href, label, leftIcon, rightIcon, newTab = false, className }) => (
        <li key={label}>
          <Link
            href={href}
            onClick={(event) => {
              onLinkClick({
                href,
                label,
                event,
              });
            }}
            {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
            className={cn(
              "flex justify-between items-center hover:text-primary p-2 gap-1",
              device === "desktop" ? linkStyle[color] : null,
              className
            )}
          >
            {leftIcon}
            {label}
            {rightIcon !== null && (rightIcon ?? <LuChevronRight size={16} />)}
          </Link>
        </li>
      )
    );

  return {
    navLinks,
  };
};
