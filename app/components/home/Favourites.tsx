import Link from "next/link";
import Card from "../card/Card";
import Subtitle from "../ui/Subtitle";
import { ArrowUpRight } from "lucide-react";

const DUMMY_DATA_TEMPORARILY = [
  {
    id: 1,
    title: "The Sculptural Vase",
    price: 48,
    category: "Home and living",
    tag: "Bestseller",
    image: "/images/sculpture-vase.jpg",
  },
  {
    id: 2,
    title: "The Everyday Tote",
    price: 65,
    category: "Everyday Essentials",
    tag: "Everyday favorite",
    image: "/images/everyday-tote.jpg",
  },
  {
    id: 3,
    title: "The Dome Table Lamp",
    price: 89,
    category: "Home and living",
    tag: "New arrival",
    image: "/images/dome-lamp.jpg",
  },
];

const Favourites = () => {
  return (
    <section className='bg-surface py-16'>
      <div className='page-container'>
        <div className='flex justify-between items-center pb-8'>
          <div>
            <Subtitle>The edit</Subtitle>
            <h2 className='section-title'>Meet your new favorites.</h2>
          </div>
          <Link className='inline-flex items-center text-foreground text-sm gap-2.5 pb-1.5 border-b border-foreground' href='/shop'>
            Shop all
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className='grid gap-3 md:grid-cols-3 '>
          {DUMMY_DATA_TEMPORARILY.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
