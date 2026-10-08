"use client";

import { NavLinks } from "@/app/constants/navConstants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

interface MobileMenuType {
  navLinks: NavLinks[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ navLinks, setOpen }: MobileMenuType) => {
  const router = useRouter();
  return (
    <div className='border-t border-border bg-background md:hidden w-full'>
      <nav className='flex flex-col p-4'>
        {navLinks.map((link) => {
          return (
            <Link
              className='rounded-md px-2 py-3 text-foreground-muted transition-colors hover:text-foreground hover:bg-brand-100'
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          onClick={() => router.push("/sign-in")}
          className='w-full mt-4 rounded-lg bg-brand-800 py-3 text-surface text-sm font-medium cursor-pointer transition hover:text-foreground hover:bg-brand-100'
        >
          Sign in
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;
