import React from "react";
import Image from "next/image";

import heroBg from "../../assets/enuvora-hero.jpg";
import Button from "../ui/Button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className='min-h-[80vh] relative overflow-hidden'>
      <Image
        className='absolute inset-0 h-full object-cover'
        src={heroBg}
        width={1920}
        height={1024}
        alt='Sculptural objects and natural textures in a bright, thoughtfully styled home'
      />
      {/* Inner hero content */}

      <div className='page-container'>
        <div className='md:max-w-1/3 min-h-[80vh] relative flex flex-col justify-center gap-2'>
          <p className='uppercase font-bold text-sm text-foreground tracking-widest'>The art of everday living</p>
          <Button variation='primary' iconRight={<MoveRight size={18} />}>
            Explore the collection{" "}
          </Button>

          <div className='my-4'>
            <h1 className='flex flex-col gap-2'>
              <span className='text-4xl md:text-6xl'>Enuvora.</span>
              <span className='text-2xl md:text-4xl'>Everday, eleveted</span>
            </h1>
          </div>
          <p>Thoughtfully chosen pieces for your home, your routine, and everything in between.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
