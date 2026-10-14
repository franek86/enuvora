import { Heart, Leaf, LucideIcon, PackageCheck } from "lucide-react";
import React from "react";

type HomeValuesType = {
  title: string;
  content: string;
  icon: LucideIcon;
};

const homeValuesSections: HomeValuesType[] = [
  {
    title: "Considered details",
    content: "The little things make a difference",
    icon: PackageCheck,
  },
  {
    title: "Timeless by design",
    content: "Made to outlast the moment",
    icon: Leaf,
  },
  {
    title: "Everyday favorites",
    content: "Good things, chosen with car",
    icon: Heart,
  },
];

const HomeValues = () => {
  return (
    <div className='bg-surface-muted'>
      <div className='page-container'>
        <div className='grid md:grid-cols-3 '>
          {homeValuesSections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className='flex justify-center items-center gap-4 py-8 border-b md:not-last:border-r border-border'>
                <Icon size={20} />
                <div className='gap-2'>
                  <div className='font-bold text-sm'>{item.title}</div>
                  <p className='text-foreground-muted text-[12px]'>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeValues;
