import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextInput = ({
  type = "text",
  className = "",
  readOnly = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type={type}
      className={twMerge(
        `border border-neutral-300 focus:border-primary !ring-none focus:outline-primary focus:shadow-primary rounded-md py-1 px-2`,
        readOnly ? "pointer-events-none bg-neutral-100 rounded-md" : "",
        className
      )}
    />
  );
};
