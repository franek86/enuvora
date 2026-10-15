import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  pages: number;
  current: number;
  onClick: (n: number) => void;
};

const Pagination = ({ pages, current, onClick }: Props) => {
  return (
    <nav className='my-8' aria-label='pagination'>
      <button
        className='inline-flex items-center justify-center text-sm cursor-pointer transition-colors h-9 w-9 hover:bg-brand-200 hover:text-background hover:rounded-sm disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50'
        aria-label='Previous page'
        disabled={current === 1}
        onClick={() => onClick(current - 1)}
      >
        <ChevronLeft size={14} />
      </button>

      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          className={`
        inline-flex items-center justify-center text-sm rounded-sm cursor-pointer transition-colors h-9 w-9 hover:bg-brand-200 hover:text-background
        ${p === current ? "bg-brand-600 text-brand-50" : "font-bold"}
        
        `}
          aria-current={p === current ? "page" : undefined}
          onClick={() => onClick(p)}
        >
          {p}
        </button>
      ))}

      <button
        className='inline-flex items-center justify-center text-sm cursor-pointer transition-colors h-9 w-9 hover:bg-brand-200 hover:text-background hover:rounded-sm disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50'
        aria-label='Next page'
        disabled={current === pages}
        onClick={() => onClick(current + 1)}
      >
        <ChevronRight size={14} />
      </button>
    </nav>
  );
};

export default Pagination;
