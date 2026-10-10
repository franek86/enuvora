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
  primary: "bg-brand-700 text-surface hover:bg-brand-200 hover:text-brand-700",
  outline: "border border-border text-brand-700 bg-transparent hover:bg-border",
};

const Button = ({
  variation = "primary",
  children,
  iconLeft,
  iconRight,
  fullWitdh = false,
  paddingX = "p-5",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center transition-colors gap-5 
        disabled:cursor-not-allowed disabled:bg-surface-muted cursor-pointer
        font-bold text-sm ${fullWitdh ? "w-full" : "w-fit"} ${variants[variation]} ${paddingX}
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
