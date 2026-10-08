"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='bg-surface-muted border-b border-border'>
      {/* Navigation */}
      <nav className='page-container flex justify-between items-center h-16 p-4'>
        <Link href='/' className='text-3xl font-bold tracking-tight text-foreground'>
          Enuvora!
        </Link>

        {/* Desktop navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={`text-sm font-medium uppercase transition-colors 
                ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}
                `}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
