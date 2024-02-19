import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";

import Button from "@/lib/components/ui/Button";
import { LINKEDIN_URL } from "@/lib/config/CONSTANTS";

import { useHomepageTracking } from "../../hooks/useHomepageTracking";

export const FooterSection = (): JSX.Element => {
  const { t } = useTranslation("home", { keyPrefix: "footer" });
  const { onLinkClick } = useHomepageTracking();

  return (
    <div className="flex flex-col items-center gap-10 text-white text-center text-lg">
      <h2 className="text-3xl">{t("title")}</h2>
      <p>
        {t("description_1")} <br /> {t("description_2")}{" "}
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <Link
          href="/login"
          onClick={(event) => {
            onLinkClick({
              href: "/login",
              label: "SIGN_IN",
              event,
            });
          }}
        >
          <Button className=" rounded-full">
            {t("start_using")}
            <LuChevronRight size={24} />
          </Button>
        </Link>
        <Link
          href="https://www.modtechai.com/contact/"
          target="_blank"
          onClick={(event) => {
            onLinkClick({
              href: "https://www.modtechai.com/contact/",
              label: "CONTACT",
              event,
            });
          }}
        >
          <Button variant="tertiary">
            {t("contact_sales")} <LuChevronRight size={24} />
          </Button>
        </Link>
      </div>
      <ul className="flex gap-10 mt-5 mb-10 text-black">
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WildcatGPT LinkedIn"
            className="hover:text-black"
          >
            <FaLinkedin size={52} />
          </a>
        </li>
      </ul>
      <p className="text-[14px] text-center">
        Powered by Quivr
      </p>
    </div>
  );
};
