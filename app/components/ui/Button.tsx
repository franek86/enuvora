import React, { ButtonHTMLAttributes } from "react";

type ButtonVariation = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variation: ButtonVariation;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fullWitdh?: boolean;
  paddingX?: string;
}

const variants: Record<ButtonVariation, string> = {
  primary: "justify-center font-bold  bg-brand-700 p-5 text-surface hover:bg-brand-200 hover:text-brand-700",
  outline: "text-foreground text-sm gap-2.5 pb-1.5 border-b border-foreground",
};

const Button = ({
  variation = "primary",
  children,
  iconLeft,
  iconRight,
  fullWitdh = false,
  paddingX,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center transition-colors gap-5 
        disabled:cursor-not-allowed disabled:bg-surface-muted cursor-pointer
        text-sm ${fullWitdh ? "w-full" : "w-fit"} ${variants[variation]} ${paddingX}
        {...props}
      `}
    >
      {iconLeft && <span className='flex items-center'>{iconLeft}</span>}
      {children}
      {iconRight && <span className='flex items-center'>{iconRight}</span>}
    </button>
  );
};

export default Button;
