"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      height="100"
      width="100"
    />
  );
}
