"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children }) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={active ? "text-blue-700 font-bold" : "text-white"}
      href={path}
    >
      {children}
    </Link>
  );
}

// scrollable path within a page href=/dashboard#settings
