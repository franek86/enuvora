"use client";
import React, { useState } from "react";

import Button from "../ui/Button";
import { money } from "@/app/helpers/currency";
import { Product } from "@/app/types/product";

type Filters = {
  cat: string[];
  brand: string[];
  min: number;
  max: number;
};

type filterProps = {
  products: Product[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  maxPrice: number;
};

const FilterShop = ({ products, filters, setFilters, maxPrice }: filterProps) => {
  //TO DO: Need to get data from backend api
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  /* Toogle checkbox */
  const handleCheckbox = (value: string, type: "cat" | "brand") => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value) ? prev[type].filter((item) => item !== value) : [...prev[type], value],
    }));
  };

  return (
    <aside className='flex flex-col px-4 gap-6'>
      <header className='flex items-center justify-between'>
        <h2 className='text-sm font-semibold'>Filters</h2>
        <Button variation='outline'>Clear all</Button>
      </header>

      {/* Categories */}
      <fieldset className='filter-group'>
        <div className='filter-legend'>Category</div>

        {categories.map((c) => (
          <label key={c} className='group flex items-center gap-2 cursor-pointer text-sm'>
            <input type='checkbox' className='peer sr-only' checked={filters.cat.includes(c)} onChange={() => handleCheckbox(c, "cat")} />

            <span className=' flex h-5 w-5 items-center justify-center rounded border border-brand-600 peer-checked:border-brand-600 peer-checked:bg-brand-600'>
              <svg className='hidden h-3.5 w-3.5 text-white group-has-checked:block' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
                <path d='m5 10 3 3 7-7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
            <span>{c}</span>
            <span className='text-xs ml-auto'>3</span>
          </label>
        ))}
      </fieldset>

      {/* Brands */}
      <fieldset className='filter-group'>
        <div className='filter-legend'>Brand</div>

        {brands.map((b) => (
          <label key={b} className='group flex items-center gap-2 cursor-pointer text-sm'>
            <input
              type='checkbox'
              className='peer sr-only'
              checked={filters.brand.includes(b)}
              onChange={() => handleCheckbox(b, "brand")}
            />
            <span className=' flex h-5 w-5 items-center justify-center rounded border border-brand-600 peer-checked:border-brand-600 peer-checked:bg-brand-600'>
              <svg className='hidden h-3.5 w-3.5 text-white group-has-checked:block' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
                <path d='m5 10 3 3 7-7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
            <span>{b}</span>
            <span className='text-xs ml-auto'>3</span>
          </label>
        ))}
      </fieldset>

      {/* Price range */}
      <fieldset className='filter-group'>
        <div className='filter-legend'>Price</div>

        <input
          className='accent-brand-600'
          type='range'
          min={filters.min}
          max={maxPrice}
          value={filters.max}
          aria-label='Maximum price'
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              max: Math.max(filters.min, Number(e.target.value)),
            }))
          }
        />

        <div className='flex items-center gap-2'>
          <label className='flex flex-col text-foreground-muted gap-1 text-[10px] flex-1'>
            <span>Min</span>
            <input
              className='border border-brand-600 px-2 py-2.5 text-sm'
              type='number'
              min={0}
              max={maxPrice}
              value={filters.min}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  min: Math.min(filters.max, Math.max(0, Number(e.target.value))),
                }))
              }
            />
          </label>
          <span>-</span>
          <label className='flex flex-col text-foreground-muted gap-1 text-[10px] flex-1'>
            <span>Max</span>
            <input
              className='border border-brand-600 px-2 py-2.5 text-sm'
              type='number'
              min={filters.min}
              max={maxPrice}
              value={filters.max}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  max: Math.max(filters.min, Math.min(maxPrice, Number(e.target.value))),
                }))
              }
            />
          </label>
        </div>

        <p className='mt-2 text-xs text-foreground-muted'>
          {money(filters.min)} - {money(filters.max)}
        </p>
      </fieldset>
    </aside>
  );
};

export default FilterShop;
