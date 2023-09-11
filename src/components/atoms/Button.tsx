import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonVariants;
  className?: string;
}

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  FLAT = "FLAT",
}

const getVariantClasses = (variant: ButtonVariants) => {
  return {
    [ButtonVariants.PRIMARY]: ["bg-primary"],
    [ButtonVariants.SECONDARY]: ["bg-second"],
    [ButtonVariants.FLAT]: ["bg-transparent", "p-0"],
  }[variant];
};

export function Button({
  onClick,
  children,
  className,
  variant = ButtonVariants.PRIMARY,
}: PropsWithChildren<ButtonProps>) {
  const defaultClassNames = ["flex items-center", "px-6 py-4", "rounded"];
  const variantClasses = getVariantClasses(variant);
  const wrapperClassNames = twMerge(
    defaultClassNames,
    variantClasses,
    className
  );

  return (
    <button onClick={onClick} className={wrapperClassNames}>
      {children}
    </button>
  );
}
