"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { Menu, Search, ShoppingBasketIcon, User, X } from "lucide-react";
import { navLinks } from "@/app/constants/navConstants";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";

const buttonStyle = "rounded-full p-2 text-foreground-muted cursor-pointer transition-colors hover:bg-brand-100";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-surface-muted border-b border-border'>
      {/* Navigation */}
      <nav className='page-container flex justify-between items-center h-20'>
        <Logo />

        {/* Desktop navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`text-sm font-medium transition-colors 
                ${isActive ? "text-foreground" : "text-muted underline-offset-8 hover:underline hover:text-foreground"}
                `}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop buttons */}
        <div className='flex items-center gap-2'>
          {/* Search */}
          <button className={buttonStyle}>
            <Search size={18} />
          </button>
          {/* User */}
          <button className={buttonStyle} onClick={() => router.push("/sign-in")}>
            <User size={18} />
          </button>
          {/* Cart bag*/}
          <button className={buttonStyle}>
            <ShoppingBasketIcon size={18} />
          </button>

          {/* Mobile menu button */}
          <button className={`${buttonStyle} md:hidden`} onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <Menu size={18} /> : <X size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobilenav */}
      {isOpen && <MobileMenu navLinks={navLinks} setOpen={setIsOpen} />}
    </header>
  );
};

export default Navbar;
