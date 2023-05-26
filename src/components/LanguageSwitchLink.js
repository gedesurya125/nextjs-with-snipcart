import React from "react";
import { useRouter } from "next/router";

import { Link } from "@thepuzzlers/pieces";

export const LanguageSwitchLink = ({ targetLocale, children }) => {
  const { defaultLocale, pathname } = useRouter();

  const getHref = () => {
    if (targetLocale === "" || targetLocale === defaultLocale) return pathname; // handle default language
    return `/${targetLocale}${pathname}`;
  };

  return <Link href={getHref()}>{children}</Link>;
};
