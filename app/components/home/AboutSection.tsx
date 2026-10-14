import Image from "next/image";
import heroBg from "../../assets/enuvora-hero.jpg";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className='grid md:grid-cols-2 min-h-125'>
      {/* left side */}
      <div className='relative min-h-75 md:min-h-0'>
        <Image className='absolute inset-0 h-full w-full object-cover' width={1200} height={500} src={heroBg} alt='Hero background' />
      </div>

      {/* right side */}
      <div className='flex flex-col justify-center item-center px-[10vw] py-12 md:px-12 lg:px-16 h-full bg-surface-muted'>
        <div className='py-4'>
          <Subtitle>The Enuvora point of view</Subtitle>
          <h2 className='section-title'>
            Good design. <br /> A little more everyday.
          </h2>
        </div>
        <p className='max-w-112.5 leading-6 mb-8'>
          We believe the things you surround yourself with should feel as good as they look. Simple forms, useful details, and a sense of
          ease — that's our kind of essential.
        </p>

        <Link href='/our-story'>
          <Button variation='outline'>
            Our story
            <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
