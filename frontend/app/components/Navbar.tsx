"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { HeroSection as HeroSectionData } from "@/sanity/types";

type NavbarProps = {
  data: HeroSectionData | null;
};

const NAV_LINKS = [
  { href: "/about", label: "Om oss" },
  { href: "/programs", label: "Programmer" },
  { href: "/team", label: "Teamet" },
  { href: "/contact", label: "Kontakt" },
] as const;

export function Navbar({ data }: NavbarProps) {
  const [isLightMode, setIsLightMode] = useState(false);
  const pathname = usePathname();
  const lightLogo = data?.logo;
  const darkLogo = data?.darkLogo ?? data?.logo;
  const logo = isLightMode ? lightLogo : darkLogo;

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsLightMode(root.classList.contains("light"));
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="px-5 py-6 sm:px-10">
      <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5">
        <Link href="/" aria-label="NASA HUNCH Norge, til forsiden" className="block">
          {logo?.asset?.url ? (
            <Image
              src={logo.asset.url}
              alt={logo.alt}
              width={logo.asset.metadata?.dimensions?.width ?? 220}
              height={logo.asset.metadata?.dimensions?.height ?? 80}
              priority
              className="h-12 w-auto object-contain"
            />
          ) : (
            <span className="font-heading uppercase">NASA HUNCH</span>
          )}
        </Link>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 sm:justify-end">
          <ul className="m-0 flex list-none flex-wrap items-center gap-x-7 gap-y-2 p-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-1 font-heading uppercase underline-offset-[0.35em] transition hover:text-accent-pink-ink ${
                      isActive
                        ? "text-accent-pink-ink underline decoration-dashed"
                        : "no-underline"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
