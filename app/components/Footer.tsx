import Link from "next/link";
import { footerLinks } from "../constants/navConstants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='bg-background pt-12'>
      <div className='page-container'>
        <div className='grid md:grid-cols-2 gap-4 md:gap-0 mb-10'>
          <div>
            <Logo />
            <p className='text-xs text-foreground-muted pt-2'>Less, but better. For the everyday.</p>
          </div>

          <div className='flex md:justify-end gap-8'>
            {footerLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  className='text-[11px] font-medium transition-colors text-foreground-muted underline-offset-8 hover:underline'
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
