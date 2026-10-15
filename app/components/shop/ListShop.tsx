"use client";
import { useState } from "react";
import Card from "../card/Card";
import Pagination from "../Pagination";

import { DUMMY_PRODUCTS_TEMPORARILY, PER_PAGE } from "@/app/constants/shopDummydata";

const ListShop = () => {
  const [page, setPage] = useState(1);

  const total = DUMMY_PRODUCTS_TEMPORARILY?.length;

  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const current = Math.min(page, total);

  const visibleData = DUMMY_PRODUCTS_TEMPORARILY?.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const handleClickPagination = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4'>
        {visibleData.map((item) => {
          return <Card key={item.id} product={item} />;
        })}
      </section>

      <Pagination pages={pages} current={current} onClick={handleClickPagination} />
    </div>
  );
};

export default ListShop;
