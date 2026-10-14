import Image from "next/image";
import { Heart, Plus } from "lucide-react";

type CardProps = {
  title: string;
  image: string;
  price: number;
  category?: string;
  tag?: string;
};

interface CardResponse {
  data: CardProps;
}

const Card = ({ data }: CardResponse) => {
  const { title, image, price, category, tag } = data;
  return (
    <article className='group bg-surface border border-brand-200 cursor-pointer'>
      <div className='relative overflow-hidden aspect-square'>
        <header className='flex justify-between items-center relative z-1 p-4'>
          <div className='bg-surface text-[9px] uppercase px-2.25 py-1.25 tracking-wider'>{tag}</div>
          <div className='flex justify-center items-center h-9 w-9 bg-transparent transition-colors hover:bg-brand-200'>
            <Heart size={18} />
          </div>
        </header>
        <Image
          className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
          src={image}
          alt={title}
          width={480}
          height={380}
        />

        <div className='bg-surface/50 transition-all hover:bg-surface/70 h-9 w-9 flex justify-center items-center absolute bottom-4 right-4 z-1'>
          <Plus size={16} />
        </div>
      </div>

      <div className='p-4'>
        <main className='flex justify-between items-center text-foreground font-normal text-sm'>
          <p className='underline-offset-5 hover:underline'>{title}</p>
          <p>€ {price}</p>
        </main>
        <footer className='text-foreground-muted text-[11px] mt-2'>{category}</footer>
      </div>
    </article>
  );
};

export default Card;
