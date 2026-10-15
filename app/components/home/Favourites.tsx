import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Card from "../card/Card";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

import { DUMMY_PRODUCTS_TEMPORARILY } from "@/app/constants/shopDummydata";

const Favourites = () => {
  const favoriteData = DUMMY_PRODUCTS_TEMPORARILY?.filter((item) => item.favorite === true);

  return (
    <section className='bg-surface py-16'>
      <div className='page-container'>
        <div className='flex justify-between items-center pb-8'>
          <div>
            <Subtitle>The edit</Subtitle>
            <h2 className='section-title'>Meet your new favorites.</h2>
          </div>
          <Link href='/shop'>
            <Button variation='outline'>
              Shop all
              <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {favoriteData.map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
