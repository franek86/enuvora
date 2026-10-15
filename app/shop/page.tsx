import { Metadata } from "next";
import MainLayout from "../components/layouts/MainLayout";

import ListShop from "../components/shop/ListShop";
import FilterShop from "../components/shop/FilterShop";
import Subtitle from "../components/ui/Subtitle";

export const metadata: Metadata = {
  title: "Shop Online",
  description:
    "Explore the Enuvora shop and discover our collection of quality products. Find your favorites and enjoy a seamless online shopping experience.",

  openGraph: {
    title: "Shop Online",
    description:
      "Explore the Enuvora shop and discover our collection of quality products. Find your favorites and enjoy a seamless online shopping experience.",
  },
  twitter: {
    title: "Shop Online",
    description:
      "Explore the Enuvora shop and discover our collection of quality products. Find your favorites and enjoy a seamless online shopping experience.",
  },
};

const Shop = () => {
  return (
    <MainLayout>
      <main className='page-container'>
        <div className='pt-14 pb-10'>
          <div className='mb-8'>
            <Subtitle>The Everyday collection</Subtitle>
            <h1 className='text-4xl md:text-6xl'>Good things, thoughtfully chosen.</h1>
          </div>
          <p className='max-w-120'>Simple objects. Lasting favorites. Discover pieces that bring a little more ease to your everyday.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[300px_minmax(400px,_1fr)] gap-4'>
          <FilterShop />
          <ListShop />
        </div>
      </main>
    </MainLayout>
  );
};

export default Shop;
