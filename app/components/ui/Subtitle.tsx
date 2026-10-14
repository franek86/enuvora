type Props = {
  children: React.ReactNode;
};

const Subtitle = ({ children, ...props }: Props) => {
  return <p className={`uppercase font-bold text-[12px] mb-3 text-foreground tracking-widest { ...props}`}>{children}</p>;
};

export default Subtitle;
