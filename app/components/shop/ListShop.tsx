"use client";
import { useState } from "react";
import Card from "../card/Card";
import Pagination from "../Pagination";

import { DUMMY_PRODUCTS_TEMPORARILY, PER_PAGE } from "@/app/constants/shopDummydata";
import FilterShop from "./FilterShop";
import Button from "../ui/Button";

const ListShop = () => {
  //should be data products from api
  const products = DUMMY_PRODUCTS_TEMPORARILY;
  const maxPrice = Math.max(...products.map((p) => p.price));

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    cat: [] as string[],
    brand: [] as string[],
    min: 0,
    max: maxPrice,
  });

  const visible = products.filter(
    (p) =>
      (!filters.cat.length || filters.cat.includes(p.category)) &&
      (!filters.brand.length || filters.brand.includes(p.brand)) &&
      p.price >= filters.min &&
      p.price <= filters.max,
  );

  const total = products?.length;

  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const current = Math.min(page, total);

  const visibleData = visible?.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  /* Get product categories
    TO DO: Get categories from backend
  */

  const handleClickPagination = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setFilters({
      cat: [],
      brand: [],
      min: 0,
      max: maxPrice,
    });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_minmax(400px,_1fr)] gap-4'>
      <FilterShop products={products} filters={filters} setFilters={setFilters} maxPrice={maxPrice} />

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4'>
        {visibleData.map((item) => {
          return <Card key={item.id} product={item} />;
        })}

        {visible.length === 0 && (
          <div className='py-20 text-center text-muted-foreground'>
            <p>No pieces match these filters.</p>
            <Button variation='outline' onClick={handleReset}>
              Clear filters
            </Button>
          </div>
        )}
      </section>

      <Pagination pages={pages} current={current} onClick={handleClickPagination} />
    </div>
  );
};

export default ListShop;
